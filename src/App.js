import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const subject = props.subject;
  return (
    //return statement
    <>
    <h1>{subject}</h1>
    </>
  );
}

export default App;
