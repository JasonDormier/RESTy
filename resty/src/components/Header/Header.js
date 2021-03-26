import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';

function Header() {
  return (
    <header className="App-header">
      <h1>RESTy</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/help">Help</NavLink>
          </li>
          <li>
            <NavLink to="/history">History</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}


// slight syntax change from module.exports = Header
export default Header;
