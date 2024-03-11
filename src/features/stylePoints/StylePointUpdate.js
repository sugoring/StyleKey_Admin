import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming axios is installed and imported

const StylePointUpdate = ({ stylePoint, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    if (stylePoint) {
      setFormData({
        title: stylePoint.title,
        description: stylePoint.description,
        image: stylePoint.image
      });
    }
  }, [stylePoint]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assuming API endpoint is '/admin/style-points/{id}'
      const response = await axios.put(`/admin/style-points/${stylePoint.id}`, formData);
      onUpdate(response.data); // Call the onUpdate function with updated data
    } catch (error) {
      console.error('Update Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Image URL</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Update Style Point</button>
    </form>
  );
};

export default StylePointUpdate;
