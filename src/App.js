import React from "react";
import { createGlobalStyle } from 'styled-components';
import './App.css';
import Todobackground from "./todolist/Todobackground";
import TodoHeader from "./todolist/TodoHeader";
import TodoList from "./todolist/TodoList";
const GlobalStyle = createGlobalStyle`
  body {
    background: #425364;
  }
`;

function App() {

  return (
    <>
    <GlobalStyle/>
    <Todobackground>
      <TodoHeader></TodoHeader>
      <TodoList></TodoList>
    </Todobackground>
    </>
  );
}

export default App;
