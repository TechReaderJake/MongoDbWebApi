import React from 'react';
import axios from 'axios';
import { api } from '../Constants';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
         Form, FormGroup, Label, Input } from 'reactstrap';

class AddBook extends React.Component {
    state = {
      modal: false,
      book:
        {
          "title": "",
          "description": "",
          "authors": "",
          "genre": "",
          "words": 0,
          "pages": 0,
          "chapters": 0,
          "created": "",
          "modified": ""
        }
    };
    
  handleChange = (event) =>
  {
    const datetime = new Date().toLocaleString();
    const {name, value} = event.target;
    this.setState(prevState => ({
      book: {
        ...prevState.book,
        [name]: value,
        created: datetime,
        modified: datetime
      }
    }))
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  addBook = () =>
  {
    var books = [];
    books.push(this.state.book);
    axios.post(api.postBooks, books).then((response) => {
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
      this.state.book =
      {
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
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="text-center">
        <Button className="mb-4" color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <div className="bg-dark">
          <ModalHeader toggle={this.toggle}>Add Book</ModalHeader>
          <ModalBody>
          <Form>
            <FormGroup>
              <Label for="bookTitle">Title</Label>
              <Input 
                type="text" 
                name="title" 
                onChange={this.handleChange}
                value={this.state.book.title} />
            </FormGroup>
            <FormGroup>
              <Label for="bookGenre">Genre</Label>
              <Input type="text" 
                name="genre" 
                onChange={this.handleChange} 
                value={this.state.book.genre} />
            </FormGroup>
            <FormGroup>
              <Label for="bookAuthors">Authors</Label>
              <Input 
                type="text" 
                name="authors" 
                onChange={this.handleChange} 
                value={this.state.book.authors} />
            </FormGroup>      
            <FormGroup>
              <Label for="bookDescription">Description</Label>
              <Input 
                type="textarea" 
                name="description" 
                onChange={this.handleChange} 
                value={this.state.book.description} />
            </FormGroup>
          </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addBook}>Save Book</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </div>
        </Modal>
      </div>
    );
  }
}

export default AddBook;