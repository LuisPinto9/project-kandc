import React from "react";
import { Link } from "react-router-dom";

const BarraLateral = () => {
  return (
    <aside className="text-center">
      <h2>Anuncios</h2>
      <ul>
        <li>
          <Link to="/">Anuncio 1</Link>
        </li>
        <li>
          <Link to="/">Anuncio 2</Link>
        </li>
        <li>
          <Link to="/">Anuncio 3</Link>
        </li>
      </ul>
    </aside>
  );
};

export default BarraLateral;
