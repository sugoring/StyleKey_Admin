import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

// Adjusted the import for Dashboard to reflect a common project structure
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard'; // Corrected the path

import AdminNavbar from './components/AdminNavbar';
import UserManagementPage from './components/UserManagementPage';
import StylePointManagementPage from './components/StylePointManagementPage';
import BrandManagementPage from './components/BrandManagementPage';
import CoordinateLookManagementPage from './components/CoordinateLookManagementPage';
import ItemManagementPage from './components/ItemManagementPage';

function App() {
  const user = useSelector(state => state.user);

  return (
    <Router>
      <div>
        {/* 네비게이션 바 */}
        <AdminNavbar />

        <Routes>
          {/* Redirect based on user login status */}
          <Route path="/" element={user.isLogin ? <Navigate to="/admin/dashboard" /> : <Navigate to="/admin/login" />} />
          
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />

          {/* Protected Routes: These routes are accessible only if the user is logged in */}
          {user.isLogin ? (
            <>
              <Route path="/user-management" element={<UserManagementPage />} />
              <Route path="/style-point-management" element={<StylePointManagementPage />} />
              <Route path="/brand-management" element={<BrandManagementPage />} />
              <Route path="/coordinate-look-management" element={<CoordinateLookManagementPage />} />
              <Route path="/item-management" element={<ItemManagementPage />} />
            </>
          ) : (
            /* Redirect to login page if the user is not logged in and trying to access protected routes */
            <>
              <Route path="/user-management" element={<Navigate to="/admin/login" />} />
              <Route path="/style-point-management" element={<Navigate to="/admin/login" />} />
              <Route path="/brand-management" element={<Navigate to="/admin/login" />} />
              <Route path="/coordinate-look-management" element={<Navigate to="/admin/login" />} />
              <Route path="/item-management" element={<Navigate to="/admin/login" />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
