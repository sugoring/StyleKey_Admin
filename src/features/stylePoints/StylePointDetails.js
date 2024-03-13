import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectSelectedStylePointId } from '../../reducers/stylePointsSlice';
import { Link } from 'react-router-dom';

// Abstract fetching logic to a separate function for cleaner component
async function fetchDataForStylePoint(id) {
  try {
    const responses = await Promise.all([
      axios.get(`/admin/style-points/${id}`),
      axios.get(`/admin/brands/style-points/${id}`),
      axios.get(`/admin/coordinate-looks/style-points/${id}`),
    ]);

    return {
      stylePoint: responses[0].data,
      brands: responses[1].data.data,
      coordinateLooks: responses[2].data.data,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { stylePoint: null, brands: [], coordinateLooks: [] };
  }
}

function StylePointDetails() {
  const selectedStylePointId = useSelector(selectSelectedStylePointId);
  const [stylePoint, setStylePoint] = useState(null);
  const [brands, setBrands] = useState([]);
  const [coordinateLooks, setCoordinateLooks] = useState([]);

  useEffect(() => {
    if (selectedStylePointId) {
      fetchDataForStylePoint(selectedStylePointId).then(({ stylePoint, brands, coordinateLooks }) => {
        setStylePoint(stylePoint);
        setBrands(brands);
        setCoordinateLooks(coordinateLooks);
      });
    }
  }, [selectedStylePointId]);

  return (
    <div>
      <h1>Style Point Details</h1>
      {/* Style Point Information Section */}
      {stylePoint && (
        <>
          <h2>Style Point Information</h2>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{stylePoint.title}</td>
                <td>{stylePoint.description}</td>
                <td><img src={stylePoint.image} alt={stylePoint.title} style={{ width: '100px', height: 'auto' }} /></td>
                <td><Link to={`/stylepoint/${selectedStylePointId}/update`}>Update</Link></td>
              </tr>
            </tbody>
          </table>
        </>
      )}

      {/* Brands Section */}
      {brands.length > 0 && (
        <>
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
                  <td><img src={brand.brand_image_url} alt={brand.title} style={{ width: '100px', height: 'auto' }} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* Coordinate Looks Section */}
      {coordinateLooks.length > 0 && (
        <>
          <h2>Coordinate Looks</h2>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {coordinateLooks.map((look) => (
                <tr key={look.id}>
                  <td>{look.title}</td>
                  <td><img src={look.coordinate_look_image_url} alt={look.title} style={{ width: '100px', height: 'auto' }} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default StylePointDetails;
