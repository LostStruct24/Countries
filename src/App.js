import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Country from './components/Country/Country';

function App() {
  <Helmet>
    <title>Countries</title>
  </Helmet>

  return (
    <Router>
      <Header />
      <Route exact path="/Countries">
        <Filter />
        <Countries />
      </Route>
      <Route path="/Countries/countries/:name" children={<Country />}></Route>
    </Router>
  );
}

export default App;
