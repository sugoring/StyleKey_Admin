import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const StylePointUpdate = () => {
  const [stylePoint, setStylePoint] = useState({ title: '', description: '', image: '' });
  const [imagePreview, setImagePreview] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStylePoint = async () => {
      try {
        const response = await axios.get(`/admin/style-points/${id}`);
        const data = response.data;
        setStylePoint(data);
        setImagePreview(data.image); // Set the image preview to the current image
      } catch (error) {
        console.error('Error fetching style point:', error);
      }
    };
    fetchStylePoint();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStylePoint((prevStylePoint) => ({
      ...prevStylePoint,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files.length) {
      const file = e.target.files[0];
      setStylePoint((prevStylePoint) => ({
        ...prevStylePoint,
        image: file, // Store the file in the state
      }));
      setImagePreview(URL.createObjectURL(file)); // Update the image preview
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', stylePoint.title);
    formData.append('description', stylePoint.description);
    if (typeof stylePoint.image === 'object') {
      formData.append('image', stylePoint.image); // Append the file if it's an object (new file)
    }

    try {
      await axios.put(`/admin/style-points/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Style Point updated successfully!');
      navigate(`/stylepoint/${id}`);
    } catch (error) {
      console.error('Error updating style point:', error);
    }
  };

  return (
    <div>
      <h1>Update Style Point</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" name="title" value={stylePoint.title} onChange={handleChange} />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" value={stylePoint.description} onChange={handleChange} />
        </div>
        <div>
          <label>Image</label><br />
          <img src={imagePreview} alt="Preview" style={{ width: '200px', height: 'auto' }} /><br />
          <input type="file" onChange={handleImageChange} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default StylePointUpdate;
