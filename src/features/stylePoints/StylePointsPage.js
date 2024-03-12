import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setSelectedStylePointId } from '../../reducers/stylePointsSlice';
import { useNavigate } from 'react-router-dom';

// Abstracted API call into a separate function for better testing and reusability
const fetchStylePoints = async () => {
  try {
    const response = await axios.get('/admin/style-points');
    return response.data;
  } catch (error) {
    console.error('Error fetching style points:', error);
    return []; // Return empty array in case of error to avoid app crash
  }
};

const StylePointsPage = () => {
  const [stylePoints, setStylePoints] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchStylePoints();
      setStylePoints(data);
    };

    fetchData();
  }, []);

  const handleStylePointClick = (stylePointId) => {
    dispatch(setSelectedStylePointId(stylePointId));
    navigate(`/stylepoint/${stylePointId}`);
  };

  return (
    <div>
      <h1>Style Points</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {stylePoints.map((stylePoint) => (
            <tr key={stylePoint.id}>
              <td>{stylePoint.id}</td>
              <td>{stylePoint.title}</td>
              <td>{stylePoint.description}</td>
              <td>
                <img src={stylePoint.image} alt={stylePoint.title} style={{ width: '100px', height: 'auto' }} />
              </td>
              <td>
                <button onClick={() => handleStylePointClick(stylePoint.id)}>Select</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StylePointsPage;
