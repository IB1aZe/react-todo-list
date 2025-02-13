import { useState } from "react";
import { addTodo } from "../../../slices/todos";
import { useDispatch, useSelector } from "react-redux";

export default function AddTodo() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.data);

    const [title, setTitle] = useState("");
    const lastTask = todos[todos.end];

    const handleChange = (e) => setTitle(e.target.value);
    const handleAddTask = () => {
        dispatch(
            addTodo({
                completed: false,
                id: lastTask?.id + 1,
                title,
                userId: lastTask?.userId,
            })
        );
        setTitle("");
    };

    return (
        <>
            <input
                placeholder="Add task"
                value={title}
                onChange={handleChange}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </>
    );
}
