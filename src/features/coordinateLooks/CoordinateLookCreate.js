import React, { useState } from 'react';
import axios from 'axios';

const CoordinateLookCreate = () => {
  const [title, setTitle] = useState('');
  const [items, setItems] = useState([]);
  const [coordinateLooksImage, setCoordinateLooksImage] = useState(null);
  const [itemImages, setItemImages] = useState([]);

  const handleCoordinateLooksImageChange = (e) => {
    setCoordinateLooksImage(e.target.files[0]);
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const handleItemFileChange = (index, file) => {
    const newImages = [...itemImages];
    newImages[index] = file;
    setItemImages(newImages);
  };

  const addItem = () => {
    setItems([...items, {}]);
    setItemImages([...itemImages, null]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    // requestDto 객체 생성
    const requestDto = {
      title: title,
      style_point_id: 1,
      items: items.map((item) => {
        return {
          id: item.id,
          title: item.title,
          sales_link: item.sales_link,
          brand_id: item.brand_id,
          category_id: item.category_id
        };
      })
    };

    // requestDto를 JSON 문자열로 변환하여 FormData에 추가
    formData.append('requestDto', JSON.stringify(requestDto));

    formData.append('coordinate-looks_imageFile', coordinateLooksImage);

    itemImages.forEach((image, index) => {
      if (image) {
        formData.append(`item_imageFile[${index}]`, image); // 수정된 부분
      }
    });

    try {
      const response = await axios.post('/admin/coordinate-looks', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data);
      alert('Coordinate look created successfully.');
    } catch (error) {
      console.error('Error creating coordinate look:', error);
      alert('Error creating coordinate look. Please check the console for details.');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="file" onChange={handleCoordinateLooksImageChange} />
      {items.map((item, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder={`Item ${index + 1} Title`}
            value={item.title || ''}
            onChange={(e) => handleItemChange(index, 'title', e.target.value)}
          />
          <input
            type="text"
            placeholder={`Item ${index + 1} Sales Link`}
            value={item.sales_link || ''}
            onChange={(e) => handleItemChange(index, 'sales_link', e.target.value)}
          />
          <input
            type="text"
            placeholder={`Item ${index + 1} Brand ID`}
            value={item.brand_id || ''}
            onChange={(e) => handleItemChange(index, 'brand_id', e.target.value)}
          />
          <input
            type="text"
            placeholder={`Item ${index + 1} Category ID`}
            value={item.category_id || ''}
            onChange={(e) => handleItemChange(index, 'category_id', e.target.value)}
          />
          <input
            type="file"
            onChange={(e) => handleItemFileChange(index, e.target.files[0])}
          />
        </div>
      ))}
      <button onClick={addItem}>Add Item</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CoordinateLookCreate;
