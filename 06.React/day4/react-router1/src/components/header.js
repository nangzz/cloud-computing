import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <ul>
        <li><Link to="/my_note1">My Page1</Link></li>
        <li><Link to="/my_note2">My Page2</Link></li>
        <li><Link to="/my_note3">My Page3</Link></li>
      </ul>
    </div>
  );
};

export default Header;