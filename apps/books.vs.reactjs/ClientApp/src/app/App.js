import React from 'react';
import { Route } from 'react-router';
import Layout from './Layout';
import { BookPage } from '../book/BookList';
import Counter from '../components/Counter';
import FetchData from '../components/FetchData';

export default () => (
  <Layout>
    <Route exact path='/' component={BookPage} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    {/* <Route exact path='/' component={Home} /> */}
  </Layout>
);
