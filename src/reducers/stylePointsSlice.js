import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching all style points
export const fetchAllStylePoints = createAsyncThunk('stylePoints/fetchAll', async () => {
  const response = await axios.get('/admin/style-points');
  return response.data;
});

// Async thunk for fetching details by style point ID (including coordinate looks and brands)
export const fetchStylePointDetails = createAsyncThunk('stylePoints/fetchDetails', async (stylePointId) => {
  const [coordinateLooksResponse, brandsResponse] = await Promise.all([
    axios.get(`/admin/coordinate-looks/style-points/${stylePointId}`),
    axios.get(`/admin/brands/style-points/${stylePointId}`)
  ]);
  return {
    coordinateLooks: coordinateLooksResponse.data,
    brands: brandsResponse.data,
  };
});

const stylePointsSlice = createSlice({
  name: 'stylePoints',
  initialState: {
    items: [],
    details: {},
    loading: false,
    error: null,
  },
  reducers: {
    // Reducer to set active style point, if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllStylePoints.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllStylePoints.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAllStylePoints.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchStylePointDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStylePointDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.details[action.meta.arg] = action.payload;
      })
      .addCase(fetchStylePointDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default stylePointsSlice.reducer;
