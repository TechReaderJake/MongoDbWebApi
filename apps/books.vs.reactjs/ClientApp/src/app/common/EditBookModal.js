import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
         Form, FormGroup, Label, Input } from 'reactstrap';

class EditBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
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
          <Input type="text" name="title" id="bookTitle" placeholder="Ralium Surfer" />
        </FormGroup>
        <FormGroup>
          <Label for="bookAuthors">Authors</Label>
          <Input type="text" name="authors" id="bookAuthors" placeholder="Jane Doe, Mike Doe" />
        </FormGroup>      
        <FormGroup>
          <Label for="bookDescription">Description</Label>
          <Input type="textarea" name="description" id="bookDescription" />
        </FormGroup>
      </Form>
            {/* <Button color="success" onClick={this.toggleNested}>Show Nested Modal</Button>
            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
              <ModalHeader>Nested Modal title</ModalHeader>
              <ModalBody>Stuff and things</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleNested}>Done</Button>{' '}
                <Button color="secondary" onClick={this.toggleAll}>All Done</Button>
              </ModalFooter>
            </Modal> */}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Save Book</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </div>
        </Modal>
      </div>
    );
  }
}

export default EditBook;