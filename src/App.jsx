import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // 경로는 실제 구조에 맞게 조정해주세요
import StylePointsPage from './features/stylePoints/StylePointsPage'; // 경로는 실제 구조에 맞게 조정해주세요
import StylePointDetails from './features/stylePoints/StylePointDetails'; // 경로는 실제 구조에 맞게 조정해주세요
// 다른 컴포넌트 임포트는 여기에 추가

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/style-points" element={<StylePointsPage />} />
          <Route path="/style-points/:id" element={<StylePointDetails />} />
          {/* 여기에 다른 경로와 컴포넌트를 매핑 */}
        </Routes>
      </>
    </Router>
  );
};

export default App;
