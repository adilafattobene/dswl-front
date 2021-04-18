import { BookImage } from "./BookImage";
import React from "react";
import "./Book.css";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export const Book = (props) => {
  return (
    <div className="Book">
      <div>
        <p>
        {props.name}
        <BookImage src={props.image} />
      </p>
      <p>{props.author}</p>
      <p>{props.pages}</p>
      <p>{props.children}</p>
      </div>
      <DeleteForeverIcon onClick={props.onClickDeleteBook}/>    
    </div>
  );
};
