import axios from 'axios';

const apiClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const readAllBrands = async () => {
    try {
      const response = await apiClient.get('/admin/brands');
      return response.data; // 성공 시 데이터 반환
    } catch (error) {
      throw error; // 에러 처리
    }
  };

  export const createBrand = async () => {
    try {
      const response = await apiClient.post('/admin/brands');
      return response.data; // 성공 시 데이터 반환
    } catch (error) {
      throw error; // 에러 처리
    }
  };

  export const readOneBrand = async (id) => {
    try {
      const response = await apiClient.get(`/admin/brands/${id}`);
      return response.data; // 성공 시 데이터 반환
    } catch (error) {
      throw error; // 에러 처리
    }
  };

  export const updateBrand = async (id) => {
    try {
      const response = await apiClient.put(`/admin/brands/${id}`);
      return response.data; // 성공 시 데이터 반환
    } catch (error) {
      throw error; // 에러 처리
    }
  };

  export const deleteBrand = async (id) => {
    try {
      const response = await apiClient.delete(`/admin/brands/${id}`);
      return response.data; // 성공 시 데이터 반환
    } catch (error) {
      throw error; // 에러 처리
    }
  };

export const readAllBrandsByStylePointId = async (id) => {
    try {
      const response = await apiClient.get(`/admin/brands/style-points/${id}`);
      return response.data; // 성공 시 데이터 반환
    } catch (error) {
      throw error; // 에러 처리
    }
  };
  