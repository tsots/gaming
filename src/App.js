import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Layout from './components/pages/layout/Index';

import Home from './components/pages/content/Home'
import About from './components/pages/content/About'
import Products from './components/pages/content/Products'
import Services from './components/pages/content/Services'
import Contact from './components/pages/content/Contact'

function App() {
  return (
    <Router>
      <Layout>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/products' component={Products} />
      <Route path='/services' component={Services} />
      <Route path='/contact' component={Contact} />
      </Switch>
      </Layout>
    </Router>
  );
}

export default App;
