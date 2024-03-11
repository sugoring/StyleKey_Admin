import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setSelectedStylePointId } from '../../reducers/stylePointsSlice';

const StylePointsPage = () => {
  const [stylePoints, setStylePoints] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/admin/style-points');
        setStylePoints(response.data);
      } catch (error) {
        console.error('Error fetching style points:', error);
      }
    };

    fetchData();
  }, []);

  const handleStylePointClick = (stylePointId) => {
    dispatch(setSelectedStylePointId(stylePointId)); // Dispatching action to store selected style point ID
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
            <th>Select</th> {/* Add a new column for selection button */}
          </tr>
        </thead>
        <tbody>
          {stylePoints.map((stylePoint) => (
            <tr key={stylePoint.id}>
              <td>{stylePoint.id}</td>
              <td>{stylePoint.title}</td>
              <td>{stylePoint.description}</td>
              <td>
                <img src={stylePoint.image} alt={stylePoint.title} />
              </td>
              <td>
                <button onClick={() => handleStylePointClick(stylePoint.id)}>Select</button>
              </td> {/* Button to select style point */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StylePointsPage;
