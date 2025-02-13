import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../slices/todos/actions";
import styles from "./Todos.module.css";
import Todo from "./Todo";
import AddTodo from "./AddTodos";

export default function TodoList({ id }) {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.data);
    const loading = useSelector((state) => state.users.loading);

    useEffect(() => {
        dispatch(fetchTodos(id));
    }, [dispatch, id]);

    if (loading) {
        return <div>Loading.....</div>;
    }

    return (
        <div className={styles.todo}>
            <div className={styles.todo_list}>
                {todos.map((el) => (
                    <Todo key={el.id} data={el} />
                ))}
            </div>
            {todos.length > 0 && <AddTodo />}
        </div>
    );
}
