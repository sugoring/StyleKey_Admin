import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectSelectedStylePointId } from '../../reducers/stylePointsSlice';
import { useNavigate } from "react-router-dom";

const BrandCreate = () => {

  const [brandName, setBrandName] = useState('');
  const [brandNameEng, setBrandNameEng] = useState('');
  const [siteUrl, setSiteUrl] = useState('');
  const [brandImage, setBrandImage] = useState(null);
  const selectedStylePointId = useSelector(selectSelectedStylePointId);
  const navigate = useNavigate();

  const handleBrandImageChange = (e) => {
    setBrandImage(e.target.files[0]);
  };

  const createBrand = async () => {
    const formData = new FormData();
    // 수정된 부분: requestDto를 Blob으로 변환하여 추가
    const requestDto = new Blob([JSON.stringify({
      title: brandName,
      title_eng: brandNameEng,
      site_url: siteUrl,
      style_point_id: selectedStylePointId,
    })], { type: 'application/json' });
    formData.append('requestDto', requestDto);
    formData.append('brand_imageFile', brandImage);

    try {
      const response = await axios.post('/admin/brands', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (response.data.code === 200) {
        alert('브랜드 생성이 성공적으로 완료되었습니다.');
        navigate(`/stylepoint/${selectedStylePointId}`);
      } else {
        // 서버 응답에 따른 추가적인 에러 처리를 여기에 구현할 수 있습니다.
        alert("브랜드 생성 중 문제가 발생했습니다.");
      }
    } catch (error) {
      console.error('브랜드 생성 중 오류가 발생했습니다.', error);
      alert("브랜드 생성 중 오류가 발생했습니다.");
      // 여기에 오류 상황을 처리하는 코드를 추가할 수 있습니다.
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Brand Name"
        value={brandName}
        onChange={(e) => setBrandName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Brand Name (English)"
        value={brandNameEng}
        onChange={(e) => setBrandNameEng(e.target.value)}
      />
      <input
        type="text"
        placeholder="Website URL"
        value={siteUrl}
        onChange={(e) => setSiteUrl(e.target.value)}
      />
      <input
        type="file"
        onChange={handleBrandImageChange}
      />
      <button onClick={createBrand}>Create Brand</button>
    </div>
  );
};

export default BrandCreate;
