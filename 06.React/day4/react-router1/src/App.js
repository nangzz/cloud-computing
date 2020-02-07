import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
};

export default App;