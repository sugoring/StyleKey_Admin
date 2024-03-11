import axios from 'axios';

const API_URL = '/admin/style-points'; // 또는 실제 배포 서버 URL

// 스타일포인트 전체 정보 조회
export const fetchAllStylePoints = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error('fetchAllStylePoints Error:', error);
    throw error;
  }
};

// 스타일포인트 단건 정보 조회
export const fetchStylePointById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('fetchStylePointById Error:', error);
    throw error;
  }
};

// 스타일포인트 정보 수정
export const updateStylePoint = async (id, stylePointData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, stylePointData);
    return response.data;
  } catch (error) {
    console.error('updateStylePoint Error:', error);
    throw error;
  }
};
