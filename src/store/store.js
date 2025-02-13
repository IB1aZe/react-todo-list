import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/users";
import todosReducer from "../slices/todos";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        todos: todosReducer,
    },
});

export default store;
