// userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { GetCourses } from './courseAction';

const initialState = {
  courses: [],
  message:'',
  user:[]
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetCourses.pending, (state) => {
        state.message = 'pending';
        state.error = null;
      })
      .addCase(GetCourses.fulfilled, (state, action) => {
        state.message = 'success';
        state.courses=action.payload
      })
      .addCase(GetCourses.rejected, (state, action) => {
        state.error = action.payload;
        state.message = 'failed';
      })
      
  },
});

export default courseSlice.reducer;
