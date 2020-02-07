import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Header from './components/Header';
import Posts from './routes/Posts';
import MyProfile from './routes/MyProfile';
import Login from './routes/Login';
import Search from './routes/Search';
import NotFound from './routes/NotFound';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about/:userid" component={About} />
        <Route path="/posts" component={Posts} />
        <Route path="/mypage" component={MyProfile} />
        <Route path="/login" component={Login} />
        <Route path="/search" component={Search} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;