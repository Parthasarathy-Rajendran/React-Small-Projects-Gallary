// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import CSS for styling

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title"><Link to="/" className="header-link">My Gallery</Link></h1>
      {/* <nav className="header-nav">
        Home
        
      </nav> */}
    </header>
  );
};

export default Header;
