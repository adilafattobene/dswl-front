import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  return (
    <header className="Menu">
      <nav>
        <ul>
          <li>
            <NavLink to="/books" exact> Livros</NavLink>
            <NavLink to="/books/new-book"> Novo Livro</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
