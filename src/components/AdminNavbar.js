import React from 'react';
import { Link } from 'react-router-dom';

function AdminNavbar() {
  // 예시로 로그인 상태를 true로 가정합니다.
  const isLoggedIn = true;

  return (
    <nav>
      <ul>
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/user-management">User Management</Link>
        </li>
        <li>
          <Link to="/style-point-management">StylePoint Management</Link>
        </li>
        <li>
          <Link to="/brand-management">Brand Management</Link>
        </li>
        <li>
          <Link to="/coordinate-look-management">CoordinateLook Management</Link>
        </li>
        <li>
          <Link to="/item-management">Item Management</Link>
        </li>
        {/* 로그인 상태에 따라 다른 메뉴 항목을 표시합니다. */}
        {isLoggedIn ? (
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default AdminNavbar;
