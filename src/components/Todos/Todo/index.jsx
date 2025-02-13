import React, { useState } from "react";
import styles from "../Todos.module.css";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../../../slices/todos";

export default function Todo({ data }) {
    const dispatch = useDispatch();
    const [isChecked, setChecked] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleCheck = () => setChecked((prev) => !prev);
    const handleEdit = () => {
        setInputValue(data.title);
        setIsEditing((prev) => !prev);
    };

    const handleSave = () => {
        const withNewTitle = { ...data, title: inputValue };
        dispatch(editTodo(withNewTitle));
        handleEdit();
    };

    const handleDelete = () => {
        dispatch(deleteTodo(data.id));
    };

    const handleTitleOnChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleEditClick = () => {
        isEditing ? handleSave() : handleEdit();
    };

    return (
        <div className={styles.todo_item}>
            <input
                className={styles.todo_item}
                type="checkbox"
                onClick={handleCheck}
                defaultChecked={data.completed}
            />
            {isEditing ? (
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleTitleOnChange}
                />
            ) : (
                <label htmlFor={data.id}>{data.title}</label>
            )}
            <button onClick={handleEditClick} className={styles.todo_btn}>
                {isEditing ? "Save" : "Edit"}
            </button>
            <button onClick={handleDelete} className={styles.todo_btn}>
                Delete
            </button>
        </div>
    );
}
