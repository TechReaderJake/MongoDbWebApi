import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/Books';

class BooksData extends Component {
  componentDidMount() {
    // This method is called when the component is first added to the document
    this.ensureDataFetched();
  }

  componentDidUpdate() {
    // This method is called when the route parameters change
    this.ensureDataFetched();
  }

  ensureDataFetched() {
    const IdIndex = parseInt(this.props.match.params.IdIndex, 10) || 0;
    this.props.requestBooks(IdIndex);
  }

  render() {
    return (
      <div>
        <h1>Books</h1>
        <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
        {renderBooksTable(this.props)}
        {renderPagination(this.props)}
      </div>
    );
  }
}

function renderBooksTable(props) {
  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>Date Created</th>
          <th>Title</th>
          <th>Description</th>
          <th>Authors</th>
        </tr>
      </thead>
      <tbody>
        {props.Books.map(book =>
          <tr key={book.Id}>
            <td>{book.Created}</td>
            <td>{book.Title}</td>
            <td>{book.Description}</td>
            <td>{book.Authors}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

function renderPagination(props) {
  const prevIdIndex = (props.IdIndex || 0) - 5;
  const nextIdIndex = (props.IdIndex || 0) + 5;

  return <p className='clearfix text-center'>
    <Link className='btn btn-default pull-left' to={`/fetch-data/${prevIdIndex}`}>Previous</Link>
    <Link className='btn btn-default pull-right' to={`/fetch-data/${nextIdIndex}`}>Next</Link>
    {props.isLoading ? <span>Loading...</span> : []}
  </p>;
}

export default connect(
  state => state.Books,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(BooksData);
