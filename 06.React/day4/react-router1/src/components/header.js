import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="item">Home</Link>
      <Link to="/about" className="item">About</Link>
    </div>
  );
};

export default Header;