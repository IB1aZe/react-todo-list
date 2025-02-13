import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  "users/fetchTodos",
  async (userId, thunkAPI) => {
    try {
      const res = fetch(
        `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
      ).then((response) => response.json());

      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue("Failure");
    }
  }
);
