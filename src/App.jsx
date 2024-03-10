import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./Login/Login.jsx";
import Dashboard from "./Login/Dashboard.jsx";

import Navbar from "./components/Navbar";
import UserManagementPage from "./components/UserManagementPage";
import StylePointManagementPage from "./components/StylePointManagementPage";
import BrandManagementPage from "./components/BrandManagementPage";
import CoordinateLookManagementPage from "./components/CoordinateLookManagementPage";
import ItemManagementPage from "./components/ItemManagementPage";

function App() {
  const { isLogin } = useSelector((state) => state.user);

  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          {/* Redirect users to the dashboard as the main page */}
          <Route path="/" element={<Navigate to="/admin/dashboard" />} />

          {/* Admin routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />

          {/* Management pages */}
          <Route path="/user-management" element={<UserManagementPage />} />
          <Route
            path="/style-point-management"
            element={<StylePointManagementPage />}
          />
          <Route path="/brand-management" element={<BrandManagementPage />} />
          <Route
            path="/coordinate-look-management"
            element={<CoordinateLookManagementPage />}
          />
          <Route path="/item-management" element={<ItemManagementPage />} />
        </Routes>

        {/* {isLogin && <Navbar />} */
        /* <Routes> */
        /*   <Route path="/" element={isLogin ? <Navigate to="/admin/dashboard" /> : <Navigate to="/admin/login" />} /> */
        /*   <Route path="/admin/login" element={<Login />} /> */
        /*   <Route path="/admin/dashboard" element={isLogin ? <Dashboard /> : <Navigate to="/admin/login" />} /> */
        /*   <Route path="/user-management" element={isLogin ? <UserManagementPage /> : <Navigate to="/admin/login" />} /> */
        /*   <Route path="/style-point-management" element={isLogin ? <StylePointManagementPage /> : <Navigate to="/admin/login" />} /> */
        /*   <Route path="/brand-management" element={isLogin ? <BrandManagementPage /> : <Navigate to="/admin/login" />} /> */
        /*   <Route path="/coordinate-look-management" element={isLogin ? <CoordinateLookManagementPage /> : <Navigate to="/admin/login" />} /> */
        /*   <Route path="/item-management" element={isLogin ? <ItemManagementPage /> : <Navigate to="/admin/login" />} /> */
        /* </Routes> */}
      </>
    </Router>
  );
}

export default App;
