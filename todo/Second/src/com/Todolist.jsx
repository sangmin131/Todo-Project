import React, { useState, useEffect } from 'react';
import styles from './TodoList.module.css'

const emoticons = [
"π",
"π",
"π",
"π",
"π",
"π",
"π",
"π",
"π",
"π",
"π³",
];

function TodoList() {
const [todos, setTodos] = useState([
{ id: 1, text: 'μΌμ΄λκΈ°', completed: false },
{ id: 2, text: 'μ»κΈ°', completed: false },
{ id: 3, text: 'μ²­μνκΈ°', completed: false },
]);

const timezoneOffset = 9 * 60 * 60 * 1000; // νκ΅­μκ° νλ €κ³  9 κ³±ν΄μ€ 
const now = new Date().getTime() + timezoneOffset; //κΈ°λ³Έμκ°μ μ¬μ©μ PCμ μκ°λ μ€μ μ΄ νκ΅­μ΄λΌλ©΄ '-540'μ λ¦¬ν΄ν  κ²μλλ€.
//UTC μκ°μ νκ΅­μκ°μΌλ‘λΆν° -9μκ°(-540λΆ)μ΄κΈ° λλ¬Έμλλ€.

const endOfDay = (24 * 60 * 60 * 1000) - now % (24 * 60 * 60 * 1000); // μ’λ£μΌ - νκ΅­μκ° %(μ€λ νλ£¨ λ¨μ μκ°)
const [timeLeft, setTimeLeft] = useState(endOfDay); // μκ° μνλ₯Ό μλ°μ΄νΈ ν΄μ€

useEffect(() => {
const timer = setTimeout(() => {
setTimeLeft(timeLeft - 1000);
}, 1000);

return () => clearTimeout(timer);
}, [timeLeft]);

const addTodo = (text) => {
let emoticon = emoticons[Math.floor(Math.random() * emoticons.length)]; // λλ€ μ«μ μμμ  λ²λ¦Ό μ μ μλ§νΌ μ΄λͺ¨ν°μ½ λ°°μ΄μμλ μ«μλ₯Ό κ°μ Έμ΄ 
setTodos([...todos, { id: todos.length + 1, text: text + ' ' + emoticon, completed: false }]);
};

const removeTodo = (id) => {
setTodos(todos.filter((todo) => todo.id !== id));
};

const toggleComplete = (id) => {
setTodos(
todos.map((todo) => {
if (todo.id === id) {
todo.completed = !todo.completed;
}

return todo;
})
);
};

const hours = Math.floor(timeLeft / (1000 * 60 * 60));
const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

return (

<div>
<h1>Time left: {hours} hours {minutes} minutes {seconds} seconds</h1>
<h1>Todo List</h1>
<ul>
{todos.map((todo) => (
<li key={todo.id}>
<input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
<span style={{ textDecoration: todo.completed ? 'line-through' : '' }}>{todo.text}</span>
{' '}
<button onClick={() => removeTodo(todo.id)}>Remove</button>
</li>
))}
</ul>
<input type="text" placeholder="ν  μΌ μ κΈ°" onKeyDown={(e) => e.key === 'Enter' && addTodo(e.target.value)} />
</div>
);
}
export default TodoList;