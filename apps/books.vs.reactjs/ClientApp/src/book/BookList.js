import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import axios from 'axios';
import AddBook from '../app/common/AddBookModal';
import BookItem from './BookItem';
import { api } from '../app/Constants';

class BookList extends Component {
    state = {
        books: []
      }
    
    componentDidMount() {
      this.refreshBooks();
    }
    refreshBooks() {
      axios.get(api.getBooks).then((response) => {
        this.setState({
          books: response.data
        })
      });
    }

    removeBook(id) {
      axios.delete(api.deleteBook + id).then((response) => {
        this.refreshBooks();
      });
    }

    render () {
      return (
        <div>
          <AddBook buttonLabel="Add Book" refreshBooks={this.refreshBooks()} />
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
                <BookItem key={book.id} book={book} removeBook={this.removeBook.bind(this, book.id)} />
              )})
            }
            </tbody>
          </Table>
        </div>
      );};
}

export function BookPage() {
  return <div>
      <h1 className="text-center mb-4">Book List</h1>
      <BookList />
  </div>
};

export default connect()(BookList);
