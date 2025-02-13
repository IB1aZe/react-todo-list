import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "./actions";

const initialState = {
    data: [],
    loadingTodos: false,
    errorLoading: false,
};

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.data = [...state.data, action.payload];
        },
        editTodo: (state, action) => {
            state.data = state.data.map((el) =>
                el.id === action.payload.id ? action.payload : el
            );
        },
        deleteTodo: (state, action) => {
            state.data = state.data.filter((el) => el.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.error;
            });
    },
});

export const { addTodo, editTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
