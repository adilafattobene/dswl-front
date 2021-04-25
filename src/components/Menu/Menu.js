import React from "react";
import "./Menu.css";


export default function Menu() {
  return (
    <header className="Menu">
      <nav>
        <ul>
          <li>
            <a href="/"> Livros</a>
            <a href="/"> Novo Livro</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
