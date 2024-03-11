import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StylePointDetails({ match }) {
  const [stylePoint, setStylePoint] = useState(null);
  const [brands, setBrands] = useState([]);
  const [coordinateLooks, setCoordinateLooks] = useState([]);

  useEffect(() => {
    const fetchStylePoint = async () => {
      try {
        const response = await axios.get(`/admin/style-points/${match.params.id}`);
        setStylePoint(response.data);
      } catch (error) {
        console.error('Error fetching style point:', error);
      }
    };

    const fetchBrandsByStylePointId = async () => {
      try {
        const response = await axios.get(`/admin/brands/style-points/${match.params.id}`);
        setBrands(response.data.data);
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    };

    const fetchCoordinateLooksByStylePointId = async () => {
      try {
        const response = await axios.get(`/admin/coordinate-looks/style-points/${match.params.id}`);
        setCoordinateLooks(response.data.data);
      } catch (error) {
        console.error('Error fetching coordinate looks:', error);
      }
    };

    fetchStylePoint();
    fetchBrandsByStylePointId();
    fetchCoordinateLooksByStylePointId();
  }, [match.params.id]);

  return (
    <div>
      <h1>Style Point Details</h1>
      {stylePoint && (
        <div>
          <h2>{stylePoint.title}</h2>
          <p>{stylePoint.description}</p>
          <img src={stylePoint.image} alt={stylePoint.title} />
        </div>
      )}
      <h2>Brands</h2>
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>
            <h3>{brand.title}</h3>
            <p><a href={brand.site_url} target="_blank" rel="noopener noreferrer">Visit Website</a></p>
            <img src={brand.brand_image_url} alt={brand.title} />
          </li>
        ))}
      </ul>
      <h2>Coordinate Looks</h2>
      <ul>
        {coordinateLooks.map((coordinateLook) => (
          <li key={coordinateLook.id}>
            <h3>{coordinateLook.title}</h3>
            <img src={coordinateLook.coordinate_look_image_url} alt={coordinateLook.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StylePointDetails;
