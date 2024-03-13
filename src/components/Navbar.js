import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/brand/create">Create Brand</Link>
        </li>
        <li>
          <Link to="/coordinate-look/create">Create Coordinate Look</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
