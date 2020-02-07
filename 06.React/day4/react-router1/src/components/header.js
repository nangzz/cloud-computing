import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <NavLink exact to="/" className="item" >Home</NavLink>
      <NavLink to="/about/dowon" className="item">About</NavLink>
      <NavLink to="/posts" className="item">Posts</NavLink>
      <NavLink to="/search" className="item">Search</NavLink>
      <NavLink to="/mypage" className="item">My Profile</NavLink>
      <NavLink to="/login" className="item">Login</NavLink>
    </div>
  );
};

export default Header;