import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/style-points" activeClassName="active">
            Style Points
          </NavLink>
        </li>
        {/* 추가적으로 필요한 네비게이션 링크를 여기에 추가할 수 있습니다. */}
      </ul>
    </nav>
  );
};

export default Navbar;
