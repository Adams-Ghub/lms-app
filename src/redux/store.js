import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './course/courseSlice'


const store = configureStore({
   reducer:{
    courses:courseReducer 
   }
  });


  export {store}