import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import * as BookActions from './BookActions';

export function Book({title, description, authors, chapters, pages})
{
    return (
        <Row>
            <Col>
                <h1>{title}</h1>
                <p>{description}</p>
                <p>By: {authors}</p>
            </Col>
            <Col>
                <p>
                    Chapters: {chapters} <br />
                    Pages: {pages}
                </p>
            </Col>
        </Row>
    );
}

function mapStateToProps(state) {
    return {...state};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...BookActions,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);
