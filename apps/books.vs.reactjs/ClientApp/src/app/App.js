import React from 'react';
import { Route } from 'react-router';
import Layout from './Layout';
import BookList from '../book/BookList';

export default () => (
  <Layout>
    <Route exact path='/' component={BookList} />
  </Layout>
);
