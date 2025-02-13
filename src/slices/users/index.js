import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./actions";

const initialState = {
    data: [],
    loadingUsers: false,
    errorLoading: false,
};

export const usersDataSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.error;
            });
    },
});

//export const {} = usersDataSlice.actions;

export default usersDataSlice.reducer;
