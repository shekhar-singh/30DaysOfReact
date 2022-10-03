import React from "react";
import {useParams} from "react-router-dom";

const MoviesForm = () => {
  const { id, title } = useParams();
  console.log(id, title);
  return (
    <div>
        <h1>Movis Form </h1>
        <p>{title}</p>
    </div>
  );
 
};

export default MoviesForm;
