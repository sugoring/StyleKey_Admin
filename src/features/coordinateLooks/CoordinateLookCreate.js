import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectSelectedStylePointId } from '../../reducers/stylePointsSlice';
import { useNavigate } from "react-router-dom";

function CoordinateLookCreate() {

    const [brandName, setBrandName] = useState('');
    const [brandNameEng, setBrandNameEng] = useState('');
    const [siteUrl, setSiteUrl] = useState('');
    const [brandImage, setBrandImage] = useState(null);
    const selectedStylePointId = useSelector(selectSelectedStylePointId);
    const navigate = useNavigate();

    
  return (
    <div>
      <h2>Create Coordinate Look</h2>
    </div>
  );
}

export default CoordinateLookCreate;