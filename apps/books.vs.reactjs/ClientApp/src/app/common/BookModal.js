import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
         Form, FormGroup, Label, Input } from 'reactstrap';

class BookModal extends React.Component {
    state = {
        modal: false
    }
    toggle = () => {
        this.props.onClick();
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
    }
    save = () => {
        this.props.saveBook();
        this.toggle();
    }
    render(){
        console.log(this.props)
    return (
        <div className={this.props.className}>
        <Button color={this.props.color} onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <div className="bg-dark">
          <ModalHeader toggle={this.props.toggle}>Add Book</ModalHeader>
          <ModalBody>
          <Form>
            <FormGroup>
              <Label for="bookTitle">Title</Label>
              <Input 
                type="text" 
                name="title" 
                onChange={this.props.handleChange}
                value={this.props.book.title} />
            </FormGroup>
            <FormGroup>
              <Label for="bookGenre">Genre</Label>
              <Input type="text" 
                name="genre" 
                onChange={this.props.handleChange} 
                value={this.props.book.genre} />
            </FormGroup>
            <FormGroup>
              <Label for="bookAuthors">Authors</Label>
              <Input 
                type="text" 
                name="authors" 
                onChange={this.props.handleChange} 
                value={this.props.book.authors} />
            </FormGroup>      
            <FormGroup>
              <Label for="bookDescription">Description</Label>
              <Input 
                type="textarea" 
                name="description" 
                onChange={this.props.handleChange} 
                value={this.props.book.description} />
            </FormGroup>
          </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.save}>Save Book</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </div>
        </Modal>
        </div>
    );
    }
}

export default BookModal;