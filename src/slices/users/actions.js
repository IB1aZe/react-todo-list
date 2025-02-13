import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async (_, thunkAPI) => {
        try {
            const res = fetch(
                `https://jsonplaceholder.typicode.com/users?_limit=10`
            ).then((response) => response.json());

            return res;
        } catch (e) {
            return thunkAPI.rejectWithValue("Failure");
        }
    }
);
