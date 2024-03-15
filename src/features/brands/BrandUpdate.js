import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectSelectedBrandId } from '../../reducers/brandsSlice';

const BrandUpdate = () => {
  const selectedBrandId = useSelector(selectSelectedBrandId);
  const [brandDetails, setBrandDetails] = useState({
    title: '',
    title_eng: '',
    site_url: '',
    style_point_id: null,
  });
  const [brandImage, setBrandImage] = useState(null);
  const [preview, setPreview] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBrandDetails = async () => {
      try {
        const response = await axios.get(`/admin/brands/${selectedBrandId}`);
        if (response.data.code === 200) {
          setBrandDetails(response.data.data);
          setPreview(response.data.data.brand_image_url);
        }
      } catch (error) {
        console.error('Failed to fetch brand details', error);
      }
    };

    if (selectedBrandId) {
      fetchBrandDetails();
    }
  }, [selectedBrandId, dispatch]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setBrandImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('requestDto', new Blob([JSON.stringify({
      title: brandDetails.title,
      title_eng: brandDetails.title_eng,
      site_url: brandDetails.site_url,
      style_point_id: brandDetails.style_point_id,
    })], { type: 'application/json' }));

    if (brandImage) {
      formData.append('imageFile', brandImage);
    }

    try {
      const response = await axios.put(`/admin/brands/${selectedBrandId}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (response.data.code === 200) {
        alert('Brand updated successfully');
        navigate(-1); // Navigate back
      } else {
        alert('Failed to update brand');
      }
    } catch (error) {
      console.error('Failed to update brand', error);
      alert('An error occurred while updating the brand');
    }
  };

  return (
    <div>
      <h1>Update Brand</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={brandDetails.title}
            onChange={(e) => setBrandDetails({ ...brandDetails, title: e.target.value })}
          />
        </div>
        <div>
          <label>Title (English): </label>
          <input
            type="text"
            value={brandDetails.title_eng}
            onChange={(e) => setBrandDetails({ ...brandDetails, title_eng: e.target.value })}
          />
        </div>
        <div>
          <label>Website URL: </label>
          <input
            type="text"
            value={brandDetails.site_url}
            onChange={(e) => setBrandDetails({ ...brandDetails, site_url: e.target.value })}
          />
        </div>
        <div>
          <label>Image: </label>
          {preview && <img src={preview} alt="Preview" style={{ width: '100px' }} />}
          <input type="file" onChange={handleImageChange} />
        </div>
        <button type="submit">Update Brand</button>
      </form>
    </div>
  );
};

export default BrandUpdate;
