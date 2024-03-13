import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const StylePointUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [stylePoint, setStylePoint] = useState(null);

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
        <table>
          <tbody>
            <tr>
              <td>Title:</td>
              <td>
                <input
                  type="text"
                  value={stylePoint.title}
                  onChange={(e) =>
                    setStylePoint({ ...stylePoint, title: e.target.value })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>
                <textarea
                  value={stylePoint.description}
                  onChange={(e) =>
                    setStylePoint({ ...stylePoint, description: e.target.value })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>Image:</td>
              <td>
                <input type="file" onChange={handleImageChange} />
                {stylePoint.image && (
                  <img src={stylePoint.image} alt="Style Point" width="200" />
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default StylePointUpdate;
