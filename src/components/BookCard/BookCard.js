import React, { useState } from "react";
import { BookIcon } from "./BookIcon";
import "./BookCard.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import BookModal from "../BookModal/BookModal";
import styled from "styled-components";

const IconesContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export default function BookCard(props) {
  const [openModal, setOpenModal] = useState(false);

  const book = {
    id: props.index,
    name: props.name,
    author: props.author,
    pages: props.pages,
    child: props.children,
  };

  return (
    <div className="BookCard">
      <div>
        <p>
          {props.name}
          <BookIcon src={props.image} />
        </p>
        <p>{props.author}</p>
        <p>{props.pages}</p>
        {props.children}
      </div>
      <IconesContainer>
        <DeleteForeverIcon onClick={props.onClickDeleteBook} />
        <BookModal
          book={book}
          openModal={openModal}
          setOpenModal={setOpenModal}
          onBookEdit={props.onBookEdit}
        />
      </IconesContainer>
    </div>
  );
}
