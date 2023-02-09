import React, { useState, useEffect } from 'react';
import styles from './TodoList.module.css'

const emoticons = [
"😃",
"😎",
"😜",
"😇",
"😍",
"😘",
"😋",
"😝",
"😛",
"😚",
"😳",
];

function TodoList() {
const [todos, setTodos] = useState([
{ id: 1, text: '일어나기', completed: false },
{ id: 2, text: '씻기', completed: false },
{ id: 3, text: '청소하기', completed: false },
]);

const timezoneOffset = 9 * 60 * 60 * 1000;
const now = new Date().getTime() + timezoneOffset;
const endOfDay = (24 * 60 * 60 * 1000) - now % (24 * 60 * 60 * 1000);
const [timeLeft, setTimeLeft] = useState(endOfDay);

useEffect(() => {
const timer = setTimeout(() => {
setTimeLeft(timeLeft - 1000);
}, 1000);

return () => clearTimeout(timer);
}, [timeLeft]);

const addTodo = (text) => {
let emoticon = emoticons[Math.floor(Math.random() * emoticons.length)];
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
<input type="text" placeholder="할 일 적기" onKeyDown={(e) => e.key === 'Enter' && addTodo(e.target.value)} />
</div>
);
}
export default TodoList;