import React from 'react';
import { Route } from 'react-router';
import Layout from './Layout';
import { BookPage } from '../book/BookList';

export default () => (
  <Layout>
    <Route exact path='/' component={BookPage} />
  </Layout>
);
