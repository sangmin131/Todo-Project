import React from "react";
import { createGlobalStyle } from 'styled-components';
import './App.css';
import TodoDate from "./components/TodoDate";
import TodoTemplate from "./components/TodoTemplate";
const GlobalStyle = createGlobalStyle`
  body {
    background: gray;
  }
`;

function App() {

  return (
    <>
    <GlobalStyle/>
    <TodoTemplate>
      <TodoDate/>
    </TodoTemplate>
    </>

  );
}

export default App;
