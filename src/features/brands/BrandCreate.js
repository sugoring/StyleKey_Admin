import React, { useState } from 'react';
import axios from 'axios';

function BrandCreate() {
  const [brandData, setBrandData] = useState({
    title: '',
    title_eng: '',
    site_url: '',
    style_point_id: 0
  });
  const [brandImageFile, setBrandImageFile] = useState(null);

  const handleChange = (e) => {
    setBrandData({
      ...brandData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    setBrandImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('requestDto', JSON.stringify(brandData));
    formData.append('brand_imageFile', brandImageFile);

    try {
      await axios.post('/admin/brands', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Brand created successfully!');
      // You can redirect or perform any other action after successful creation
    } catch (error) {
      console.error('Error creating brand:', error);
    }
  };

  return (
    <div>
      <h1>Create Brand</h1>
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default BrandCreate;
