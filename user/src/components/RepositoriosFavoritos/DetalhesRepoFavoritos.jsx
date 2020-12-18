import React from "react";

function DetalhesRepoFavoritos(props) {
  const favoritos = props.favo;

  return (
    <div>
      <ul className="list-group">
        {favoritos.map((favorito) => (
          <li className="list-group-item" key={favorito.id}>
            <a href={favorito.html_url}>{favorito.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetalhesRepoFavoritos;
