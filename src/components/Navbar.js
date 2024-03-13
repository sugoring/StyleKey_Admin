import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav>
      <Link to="/">
        <img src="/navlogo.png" alt="Logo" />
      </Link>
    </nav>
  );
}

export default NavigationBar;
