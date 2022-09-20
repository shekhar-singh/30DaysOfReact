import React from 'react';
import Movies from "./components/movies";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Search from './components/search';
import Header from './components/header';

function App() {
  return (
    <div className='container'>

        <Header/>
        <Search/>
        <Movies />

    </div>
  );
}

export default App;
