import React, { Component } from 'react';
import { Container, Table, Button } from 'reactstrap';
import axios from 'axios';

class App extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    axios.get('https://localhost:44331/api/v1/books').then((response) => {
      this.setState({
        books: response.data
      })
    });
  }

  render () {
    let books = this.state.books.map((book) => {
      return (
        <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.authors}</td>
            <td>{book.description}</td>
            <td>{book.pages}</td>
            <td>{book.chapters}</td>
            <td><Button color="success" className="mr-2">Edit</Button><Button color="danger">Delete</Button></td>
          </tr>
      )
    });
    return (
    <Container className="App">
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Authors</th>
            <th>Description</th>
            <th>Chapters</th>
            <th>Pages</th>
            <th className="actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books}
        </tbody>
      </Table>
    </Container>
  )};
}

export default App;
