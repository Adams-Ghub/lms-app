// userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { GetCourses } from './courseAction';

const initialState = {
  courses: [],
  message:'',
  enrollMsg:'',
  user:[]
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; 
    },
  clearEnrolled:(state)=>{
    state.enrollMsg=''
  },
    enrollUser:(state,action)=>{
      state.courses.map((item)=>{
        if(item.id===action.payload.id){
          item.students.push(action.payload.student);
          item.enrollmentStatus="In Progress";
          state.enrollMsg="enrolled"
        }
      })
      
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetCourses.pending, (state) => {
        state.message = 'pending';
      
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
export const { setUser,enrollUser,clearEnrolled } = courseSlice.actions;
export default courseSlice.reducer;
