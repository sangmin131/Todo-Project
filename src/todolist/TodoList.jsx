import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';
const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
`;
export default function TodoList() {
  return (
    <TodoListBlock>
      <TodoListItem text="프로젝트 생성하기" done={true} />
      <TodoListItem text="컴포넌트 스타일링 하기" done={true} />
      <TodoListItem text="Context 만들기" done={false} />
      <TodoListItem text="기능 구현하기" done={false} />
    </TodoListBlock>
  );
}

