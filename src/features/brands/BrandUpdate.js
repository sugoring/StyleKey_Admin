import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BrandUpdate({ match }) {
  const [brandData, setBrandData] = useState({
    title: '',
    title_eng: '',
    site_url: '',
    style_point_id: 0
  });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const response = await axios.get(`/admin/brands/${match.params.id}`);
        setBrandData(response.data.requestDto);
      } catch (error) {
        console.error('Error fetching brand:', error);
      }
    };

    fetchBrand();
  }, [match.params.id]);

  const handleChange = (e) => {
    setBrandData({
      ...brandData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('requestDto', JSON.stringify(brandData));
    if (imageFile) {
      formData.append('imageFile', imageFile);
    }

    try {
      await axios.put(`/admin/brands/${match.params.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Brand updated successfully!');
      // You can redirect or perform any other action after successful update
    } catch (error) {
      console.error('Error updating brand:', error);
    }
  };

  return (
    <div>
      <h1>Update Brand</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={brandData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Title (English):</label>
          <input
            type="text"
            name="title_eng"
            value={brandData.title_eng}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Website URL:</label>
          <input
            type="text"
            name="site_url"
            value={brandData.site_url}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Style Point ID:</label>
          <input
            type="number"
            name="style_point_id"
            value={brandData.style_point_id}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Brand Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default BrandUpdate;
