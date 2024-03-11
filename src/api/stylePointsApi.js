import axios from 'axios';

// Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: 'http://localhost:9000/admin', // 개발 환경에서의 프록시 서버 주소
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchAllStylePoints = async () => {
  try {
    const response = await apiClient.get('/style-points');
    return response.data; // 성공 시 데이터 반환
  } catch (error) {
    throw error; // 에러 처리
  }
};

export const fetchStylePointById = async (id) => {
  try {
    const response = await apiClient.get(`/style-points/${id}`);
    return response.data; // 성공 시 데이터 반환
  } catch (error) {
    throw error; // 에러 처리
  }
};

export const fetchAllBrandsByStylePointId = async (id) => {
  try {
    const response = await apiClient.get(`/brands/style-points/${id}`);
    return response.data; // 성공 시 데이터 반환
  } catch (error) {
    throw error; // 에러 처리
  }
};

export const fetchAllCoordinateLooksByStylePointId = async (id) => {
  try {
    const response = await apiClient.get(`/coordinate-looks/style-points/${id}`);
    return response.data; // 성공 시 데이터 반환
  } catch (error) {
    throw error; // 에러 처리
  }
};
