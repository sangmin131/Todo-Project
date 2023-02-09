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

const timezoneOffset = 9 * 60 * 60 * 1000; // 한국시간 하려고 9 곱해줌 
const now = new Date().getTime() + timezoneOffset; //기본시간에 사용자 PC의 시간대 설정이 한국이라면 '-540'을 리턴할 것입니다.
//UTC 시간은 한국시간으로부터 -9시간(-540분)이기 때문입니다.

const endOfDay = (24 * 60 * 60 * 1000) - now % (24 * 60 * 60 * 1000); // 종료일 - 한국시간 %(오늘 하루 남은 시간)
const [timeLeft, setTimeLeft] = useState(endOfDay); // 시간 상태를 업데이트 해준

useEffect(() => {
const timer = setTimeout(() => {
setTimeLeft(timeLeft - 1000);
}, 1000);

return () => clearTimeout(timer);
}, [timeLeft]);

const addTodo = (text) => {
let emoticon = emoticons[Math.floor(Math.random() * emoticons.length)]; // 랜덤 숫자 소수점 버림 에 정수만큼 이모티콘 배열에있는 숫자를 가져옴 
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