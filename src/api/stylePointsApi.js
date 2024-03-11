import axios from 'axios';

// Axios 인스턴스 생성
const apiClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const readAllStylePoint = async () => {
  try {
    const response = await apiClient.get('/admin/style-points');
    return response.data; // 성공 시 데이터 반환
  } catch (error) {
    throw error; // 에러 처리
  }
};

export const readOneStylePoint = async (id) => {
  try {
    const response = await apiClient.get(`/admin/style-points/${id}`);
    return response.data; // 성공 시 데이터 반환
  } catch (error) {
    throw error; // 에러 처리
  }
};

export const updateStylePoint = async (id) => {
  try {
    const response = await apiClient.put(`/admin/style-points/${id}`);
    return response.data; // 성공 시 데이터 반환
  } catch (error) {
    throw error; // 에러 처리
  }
};

