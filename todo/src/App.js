import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';



let now = new Date();	        // 현재 날짜 및 시간
let year = now.getFullYear();	// 연도
let month = now.getMonth(month + 1);	// 월
let date = now.getDate();	// 일
let day = now.getDay();	        // 요일
let hours = now.getHours();	// 시간
let minutes = now.getMinutes();	// 분
let seconds = now.getSeconds();	// 초
const dayIs = ['일', '월', '화', '수', '목', '금', '토'];
const nowDay = dayIs[new Date().getDay()];

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} /><h1>⏰{year}년 {month }월 {date}일 {nowDay}요일</h1>
      <TodoList filter={filter}/>
    </DarkModeProvider>
  );
}

export default App;
