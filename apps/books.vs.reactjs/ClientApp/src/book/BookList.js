import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'reactstrap';
import axios from 'axios';
import BookModal from '../app/common/BookModal';
//import BookItem from './BookItem';
import { api } from '../app/Constants';

class BookList extends Component {
  intialState = {
    "title": "",
    "description": "",
    "authors": "",
    "genre": "",
    "words": 0,
    "pages": 0,
    "chapters": 0,
    "created": "",
    "modified": ""
  };
  state = {
    book: this.intialState,
    books:[]
  };
 
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
  addBook = () =>
  {
    var books = [];
    this.updateBookTime(false);
    books.push(this.state.book);
    axios.post(api.postBooks, books).then((response) => {
      this.setState(() => ({
        book: this.intialState
      }));
      this.refreshBooks();
    }).catch(function (error) {
      console.log(error);
    });
  }
  updateBook = () =>
  {
    this.updateBookTime(true);
    axios.put(api.putBook + this.state.book.id, this.state.book).then((response) => {
      this.refreshBooks();
    }).catch(function (error) {
      console.log(error);
    });
  }
  removeBook = (id) => {
    axios.delete(api.deleteBook + id).then((response) => {
      this.refreshBooks();
    });
  }

  handleChange = (event) =>
  {
    const {name, value} = event.target;
    this.setState(prevState => ({
      book: {
        ...prevState.book,
        [name]: value
      }
    }))
  }
  bookState = (b) => {
    this.setState({
      book: b
    })
  }

  updateBookTime(updated)
  {
    const datetime = new Date().toLocaleString();
    var temp = this.state.book;
    if(updated)
    {
      temp.modified = datetime;
    }
    else{
      temp.created = temp.modified = datetime;
    }
    this.setState ({
      book: temp
    });
  }

  render () {
    return (
      <div>
        <h1 className="text-center mb-4">Book List</h1>
        <BookModal 
          className="text-center mb-4"
          buttonLabel="Add Book" 
          color="danger"
          book={this.state.book}
          saveBook={this.addBook}
          handleChange={this.handleChange}
          onClick={this.bookState.bind(this, this.intialState)}
        />
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
                <td><a href={"/" + book.id}>{book.title}</a></td>
                <td>{book.authors}</td>
                <td>{book.description}</td>
                <td>{book.genre}</td>
                <td>         
                <BookModal 
                    buttonLabel="Edit"
                    color="success"
                    className="d-inline-block mr-2"
                    book={this.state.book}
                    saveBook={this.updateBook}
                    handleChange={this.handleChange}
                    onClick={this.bookState.bind(this, book)}
                  />
                <Button color="danger" onClick={this.removeBook.bind(this, book.id)}>Delete</Button>
                </td>
              </tr>
            )})
          }
          </tbody>
        </Table>
      </div>
    );
  };
}

export default connect()(BookList);
