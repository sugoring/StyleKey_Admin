import axios from 'axios';

const apiClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});


export const readAllCoordinateLooksByStylePointId = async (id) => {
    try {
      const response = await apiClient.get(`/admin/coordinate-looks/style-points/${id}`);
      return response.data; // 성공 시 데이터 반환
    } catch (error) {
      throw error; // 에러 처리
    }
  };
  