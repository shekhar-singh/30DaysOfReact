import React from 'react';
import Movies from "./components/movies";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';

function App() {
  return (
    <>
    <Header/>
    <div className='container'>
        <Movies />
    </div>
    </>
  );
}

export default App;
