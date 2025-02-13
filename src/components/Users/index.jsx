import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../slices/users/actions";
import styles from "./Users.module.css";
import TodoList from "../Todos";
//import todosReducer from "../Todos/todosReducer";

export function Users() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.data);
    const loading = useSelector((state) => state.users.loading);

    const [userId, setUserId] = useState();
    const [isActiveBtn, setIsActiveBtn] = useState();

    const handleClickButton = (id) => {
        setUserId(id);
        setIsActiveBtn(id);
    };

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) {
        return <div>Loading.....</div>;
    }

    

    return (
        <section className={styles.users_container}>
            <div className={styles.users}>
                {users.map((el) => (
                    <button
                        className={`${styles.button} ${
                            isActiveBtn === el.id
                                ? styles.active
                                : styles.button
                        }`}
                        key={el.id}
                        onClick={() => handleClickButton(el.id)}
                    >
                        {el.name}
                    </button>
                ))}
            </div>
            <TodoList id={userId} />
        </section>
    );
}
