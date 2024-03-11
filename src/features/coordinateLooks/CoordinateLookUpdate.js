import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CoordinateLookUpdate({ match }) {
  const [coordinateLookData, setCoordinateLookData] = useState({
    title: '',
    style_point_id: 0,
    items: [{
      id: 0,
      title: '',
      sales_link: '',
      brand_id: 0,
      category_id: 0
    }]
  });
  const [coordinateLookImageFile, setCoordinateLookImageFile] = useState(null);
  const [itemImageFiles, setItemImageFiles] = useState([]);

  useEffect(() => {
    const fetchCoordinateLook = async () => {
      try {
        const response = await axios.get(`/admin/coordinate-looks/${match.params.id}`);
        setCoordinateLookData(response.data.requestDto);
      } catch (error) {
        console.error('Error fetching coordinate look:', error);
      }
    };

    fetchCoordinateLook();
  }, [match.params.id]);

  const handleChange = (e) => {
    if (e.target.name.includes('item')) {
      const index = parseInt(e.target.name.split('-')[1]);
      const updatedItems = [...coordinateLookData.items];
      updatedItems[index][e.target.id] = e.target.value;
      setCoordinateLookData({
        ...coordinateLookData,
        items: updatedItems
      });
    } else {
      setCoordinateLookData({
        ...coordinateLookData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleCoordinateLookImageChange = (e) => {
    setCoordinateLookImageFile(e.target.files[0]);
  };

  const handleItemImageChange = (e, index) => {
    const updatedItemImageFiles = [...itemImageFiles];
    updatedItemImageFiles[index] = e.target.files[0];
    setItemImageFiles(updatedItemImageFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('requestDto', JSON.stringify(coordinateLookData));
    formData.append('coordinate-looks_imageFile', coordinateLookImageFile);
    itemImageFiles.forEach((itemImageFile, index) => {
      if (itemImageFile) {
        formData.append(`item_imageFile-${index}`, itemImageFile);
      }
    });

    try {
      await axios.put(`/admin/coordinate-looks/${match.params.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Coordinate look updated successfully!');
      // You can redirect or perform any other action after successful update
    } catch (error) {
      console.error('Error updating coordinate look:', error);
    }
  };

  const addItem = () => {
    setCoordinateLookData({
      ...coordinateLookData,
      items: [...coordinateLookData.items, {
        id: 0,
        title: '',
        sales_link: '',
        brand_id: 0,
        category_id: 0
      }]
    });
  };

  return (
    <div>
      <h1>Update Coordinate Look</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={coordinateLookData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Style Point ID:</label>
          <input
            type="number"
            name="style_point_id"
            value={coordinateLookData.style_point_id}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Coordinate Look Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleCoordinateLookImageChange}
          />
        </div>
        <h2>Items</h2>
        {coordinateLookData.items.map((item, index) => (
          <div key={index}>
            <div>
              <label>Title:</label>
              <input
                type="text"
                name={`item-title-${index}`}
                id="title"
                value={item.title}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label>Sales Link:</label>
              <input
                type="text"
                name={`item-sales_link-${index}`}
                id="sales_link"
                value={item.sales_link}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label>Brand ID:</label>
              <input
                type="number"
                name={`item-brand_id-${index}`}
                id="brand_id"
                value={item.brand_id}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label>Category ID:</label>
              <input
                type="number"
                name={`item-category_id-${index}`}
                id="category_id"
                value={item.category_id}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label>Item Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleItemImageChange(e, index)}
              />
            </div>
          </div>
        ))}
        <button type="button" onClick={addItem}>Add Item</button>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default CoordinateLookUpdate;
