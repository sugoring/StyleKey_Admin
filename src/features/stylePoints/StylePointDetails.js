import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BrandDetails from '../brands/BrandDetails';


function StylePointDetails() {
  const { id } = useParams();
  const [stylePoint, setStylePoint] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/admin/style-points/${id}`);
        setStylePoint(response.data);
      } catch (error) {
        console.error('Error fetching style point:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!stylePoint) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <div>
      <h2>Style Point Details</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{stylePoint.id}</td>
            <td>{stylePoint.title}</td>
            <td>{stylePoint.description}</td>
            <td>
              <img src={stylePoint.image} alt="Style Point" />
            </td>
            <td>
              <button onClick={() => window.location.href=`/stylepoint/${id}/update`}>
                Update
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
<BrandDetails />
    </div>
    </div>
  );
}

export default StylePointDetails;
