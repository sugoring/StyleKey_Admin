import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { stylePointsSlice } from '../../reducers/stylePointsSlice';

const StylePointUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [stylePoint, setStylePoint] = useState(null);
  const selectedStylePointId = useSelector(
    (state) => state.stylePoints.selectedStylePointId
  );

  useEffect(() => {
    const fetchStylePoint = async () => {
      try {
        const response = await axios.get(`/admin/style-points/${id}`);
        setStylePoint(response.data);
      } catch (error) {
        console.error('Error fetching style point:', error);
      }
    };

    fetchStylePoint();
  }, [id]);

  const handleImageChange = (event) => {
    // Handle image selection and preview here
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Assuming your API endpoint for updating style point is '/admin/style-points/{id}'
      await axios.put(`/admin/style-points/${id}`, stylePoint);
      navigate('/previous-page'); // Change '/previous-page' to your actual previous page route
    } catch (error) {
      console.error('Error updating style point:', error);
      // Handle error here (e.g., display error message to user)
    }
  };

  if (!stylePoint) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Update Style Point</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={stylePoint.title}
            onChange={(e) =>
              setStylePoint({ ...stylePoint, title: e.target.value })
            }
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={stylePoint.description}
            onChange={(e) =>
              setStylePoint({ ...stylePoint, description: e.target.value })
            }
          />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" onChange={handleImageChange} />
          {stylePoint.image && (
            <img src={stylePoint.image} alt="Style Point" width="200" />
          )}
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default StylePointUpdate;
