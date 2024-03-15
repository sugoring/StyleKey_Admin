import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reset as resetStylePoints } from './../reducers/stylePointsSlice';
import { reset as resetBrands } from './../reducers/brandsSlice';
import { reset as resetCoordinateLooks } from './../reducers/coordinateLooksSlice';

function NavigationBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    // Dispatch reset actions for each slice
    dispatch(resetStylePoints());
    dispatch(resetBrands());
    dispatch(resetCoordinateLooks());

    // Navigate to the homepage
    navigate('/');
  };

  return (
    <nav>
      <button onClick={handleLogoClick}>
        <img src="/navlogo.png" alt="Logo" />
      </button>
    </nav>
  );
}

export default NavigationBar;
