import React from "react";
import {useParams} from "react-router-dom";
import LoginForm from "./loginForm";

const MoviesForm = () => {
  const { id, title } = useParams();
  console.log(id, title);
  return (
    <div>
        <h1>Movis Form </h1>
        <p>{title}</p>
        <LoginForm />


    </div>
  );
 
};

export default MoviesForm;
