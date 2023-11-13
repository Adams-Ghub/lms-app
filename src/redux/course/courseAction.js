import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, collection} from "firebase/firestore";
import {  db } from "../../firebase/firebase.js";




export const GetCourses = createAsyncThunk(
  "getcourses",
  async (_, thunkAPI) => {
    try {
      const coursesData = [];

      const querySnapshot = await getDocs(collection(db, "courses"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshot
        coursesData.push(doc.data());
      });
      return coursesData;
    } catch (error) {
      alert(error.message);
      throw error;
    }
  }
);

