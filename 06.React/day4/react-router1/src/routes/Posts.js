import React from 'react';
import { Link, Route } from 'react-router-dom';

const Post = ({match}) => {
  return (
    <h3>{match.params.title}</h3>
  )
}

const Posts = () => {
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        <li><Link to="/posts/java">Java programming</Link></li>
        <li><Link to="/posts/react">React programming</Link></li>
        <li><Link to="/posts/js">Javascript</Link></li>
        <li><Link to="/posts/msa">Microservice Architecture</Link></li>
      </ul>
      <Route path="/posts/:title" component={Post} />
    </div>
  );
};

export default Posts;