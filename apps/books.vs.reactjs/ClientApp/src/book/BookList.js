import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'reactstrap';
import axios from 'axios';
import AddBook from '../app/common/AddBookModal';


export function BookPage() {
  return <div>
      <h1 className="text-center mb-4">Book List</h1>
      <AddBook buttonLabel="Add Book" />
      <Book />
  </div>
};

class Book extends Component {
    state = {
        books: []
      }
    
    componentDidMount() {
      this._refreshBooks();
    }
    _refreshBooks() {
      axios.get('https://localhost:44331/api/v1/books').then((response) => {
        this.setState({
          books: response.data
        })
      });
    }

    removeBook(id) {
      axios.delete('https://localhost:44331/api/v1/books/' + id).then((response) => {
        this._refreshBooks();
      });
    }
    BookRow() {
      return (
        <Table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Authors</th>
              <th>Description</th>
              <th>Genre</th>
              <th className="actions">Actions</th>
            </tr>
          </thead>
          <tbody>
          { this.state.books.map((book) => {
            return (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.authors}</td>
              <td>{book.description}</td>
              <td>{book.genre}</td>
              <td>
                <Button color="success" className="mr-2">Edit</Button>
                <Button color="danger" onClick={this.removeBook.bind(this, book.id)}>Delete</Button>
              </td>
            </tr> )})
          }
          </tbody>
        </Table>
      );
    }

    render () {
      return (
        this.BookRow()
    )};
}

export default connect()(Book);
