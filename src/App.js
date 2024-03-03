import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // 수정
import AdminLoginPage from './components/AdminLoginPage';
import AdminNavbar from './components/AdminNavbar';
import Dashboard from './pages/Admin/Dashboard'; // 수정
import UserManagementPage from './components/UserManagementPage';
import StylePointManagementPage from './components/StylePointManagementPage';
import BrandManagementPage from './components/BrandManagementPage';
import CoordinateLookManagementPage from './components/CoordinateLookManagementPage';
import ItemManagementPage from './components/ItemManagementPage';

function App() {
  return (
    <Router>
      <div>
        {/* 네비게이션 바 */}
        <AdminNavbar />
        
        {/* 페이지 라우팅 */}
        <Routes> {/* 수정 */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<Dashboard />} /> {/* 수정 */}
          <Route path="/user-management" element={<UserManagementPage />} />
          <Route path="/style-point-management" element={<StylePointManagementPage />} />
          <Route path="/brand-management" element={<BrandManagementPage />} />
          <Route path="/coordinate-look-management" element={<CoordinateLookManagementPage />} />
          <Route path="/item-management" element={<ItemManagementPage />} />
          {/* 추가 페이지 라우팅 */}
        </Routes> {/* 수정 */}
      </div>
    </Router>
  );
}

export default App;
