import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Book() {
  const { id } = useParams();

  useEffect(() => {
    //TODO
    //busca no serviço backend utilizando o id
  }, []);

  return (
    <div>
      <p>LIVRO: {id} </p>
    </div>
  );
}
