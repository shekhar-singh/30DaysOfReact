import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import Movies from "./components/movies";
import NotFound from './components/NotFound';
import Customers from './components/Customers';
import MoviesForm from './components/moviesForm';
import LoginForm from './components/loginForm';

function App() {
  return (
    <>
    <Header/>
    <div className='container'>

    <Routes>        
      <Route path="/movies" exact element={<Movies/>} />
      <Route path='/movies/:id/:title' element={<MoviesForm/>} />
      <Route path="/customers" element={<Customers/>} />
      <Route path="/login" element={<LoginForm/>} />
      <Route path="/not-found" element={<NotFound/>} />
      <Route path="*" element={<NotFound />} />

        {/* <Movies /> */}
    </Routes>
    </div>
    </>
  );
}

export default App;
