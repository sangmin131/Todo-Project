import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import styles from './Todo.module.css'
export default function Todo({ todo, onUpdate, onDelete }) {
  const {id, text, status } = todo;
  const handleChange = (e) => {
    onUpdate({ ...todo, status: e.target.checked ? 'completed' : 'active' });
  }
  const handleDelete = () => onDelete(todo);
  return (
    <li className={styles.todo}>
      <input className={styles.checkbox}
        type='checkbox'
        id={id}
        checked={status === 'completed'}
        onChange={handleChange} />
      <label className={styles.text}
        htmlFor={id}>{text}</label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <FaRegTrashAlt />
        </button>
      </span>
    </li>
  );
}

