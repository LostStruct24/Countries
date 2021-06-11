import React from 'react';
import { Helmet } from 'react-helmet';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';

function App() {
  return (
    <div>
      <Helmet>
        <title>Countries</title>
      </Helmet>
      <Header />
      <Filter />
      <Countries />
    </div>
  );
}

export default App;
