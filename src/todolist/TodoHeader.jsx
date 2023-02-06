import React, { useState } from 'react';
import styled from 'styled-components';
const TodoHeaderBackground = styled.div`
      h1 {
        font-size: 36px;
    }
    .list{
      margin: 0;
      color: #68b3b3;
    }
    border-bottom: solid 1px ;
`
let now = new Date();	        // 현재 날짜 및 시간
let year = now.getFullYear();	// 연도
let month = now.getMonth();	// 월
let date = now.getDate();	// 일
let day = now.getDay();	        // 요일
let hours = now.getHours();	// 시간
let minutes = now.getMinutes();	// 분
let seconds = now.getSeconds();	// 초
const dayIs = ['일', '월', '화', '수', '목', '금', '토'];
const nowDay = dayIs[new Date().getDay()];

export default function TodoHeader() {
  const [days, setDays] = useState();
  return (
    <>
      <TodoHeaderBackground>
        <h1>⏰{year}년 {month}월 {date}일 {nowDay}요일</h1>
        <div className='list'> 오늘 할일 몇개 남음</div>
      </TodoHeaderBackground>
    </>
  );
}

