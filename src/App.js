import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route path="/admin/login" component={AdminLoginPage} />
          <Route path="/admin/dashboard" component={Dashboard} /> {/* 수정 */}
          <Route path="/user-management" component={UserManagementPage} />
          <Route path="/style-point-management" component={StylePointManagementPage} />
          <Route path="/brand-management" component={BrandManagementPage} />
          <Route path="/coordinate-look-management" component={CoordinateLookManagementPage} />
          <Route path="/item-management" component={ItemManagementPage} />
          {/* 추가 페이지 라우팅 */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
