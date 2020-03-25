// import react module
import React from 'react';
// import custom header component
import Header from "./components/Header/Header";
// import custom nav component
import Nav from "./components/Nav/Nav";
// import custom main component
import Main from "./components/Main/Main";
// import custom filler component
import Filler from "./components/Filler/Filler";
// import App Css file
import './App.css';

// function App
function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>
        <Filler />
      </Main>
    </>
  );
}

// gør function App tilgængeligt for andre filer
export default App;
