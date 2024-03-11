import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectSelectedStylePointId } from '../../reducers/stylePointsSlice';
import { Link } from 'react-router-dom'; // Import Link for navigation

function StylePointDetails() {
  const selectedStylePointId = useSelector(selectSelectedStylePointId);
  const [stylePoint, setStylePoint] = useState(null);
  const [brands, setBrands] = useState([]);
  const [coordinateLooks, setCoordinateLooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stylePointResponse = await axios.get(`/admin/style-points/${selectedStylePointId}`);
        setStylePoint(stylePointResponse.data);

        const brandsResponse = await axios.get(`/admin/brands/style-points/${selectedStylePointId}`);
        setBrands(brandsResponse.data.data);

        const coordinateLooksResponse = await axios.get(`/admin/coordinate-looks/style-points/${selectedStylePointId}`);
        setCoordinateLooks(coordinateLooksResponse.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (selectedStylePointId) {
      fetchData();
    }
  }, [selectedStylePointId]);

  return (
    <div>
      <h1>Style Point Details</h1>
      <h2>Style Point Information</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th> {/* Add a new column for actions */}
          </tr>
        </thead>
        <tbody>
          {stylePoint && (
            <tr>
              <td>{stylePoint.title}</td>
              <td>{stylePoint.description}</td>
              <td><img src={stylePoint.image} alt={stylePoint.title} /></td>
              <td>
                {/* "Update Style Point" button */}
                <Link to={`/stylepoint/${selectedStylePointId}/update`}>Update</Link>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <h2>Brands</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Website</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand) => (
            <tr key={brand.id}>
              <td>{brand.title}</td>
              <td><a href={brand.site_url} target="_blank" rel="noopener noreferrer">Visit Website</a></td>
              <td><img src={brand.brand_image_url} alt={brand.title} /></td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Coordinate Looks</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {coordinateLooks.map((coordinateLook) => (
            <tr key={coordinateLook.id}>
              <td>{coordinateLook.title}</td>
              <td><img src={coordinateLook.coordinate_look_image_url} alt={coordinateLook.title} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StylePointDetails;
