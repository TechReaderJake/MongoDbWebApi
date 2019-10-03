import React from 'react';
import { Button } from 'reactstrap';

function BookItem (props) {
    let book = props.book;
    return (
        <tr>
            <td><a href={"/" + book.id}>{book.title}</a></td>
            <td>{book.authors}</td>
            <td>{book.description}</td>
            <td>{book.genre}</td>
            <td>
            <Button color="success" className="mr-2">Edit</Button>
            <Button color="danger" onClick={props.removeBook}>Delete</Button>
            </td>
        </tr>
        );
}

export default BookItem;