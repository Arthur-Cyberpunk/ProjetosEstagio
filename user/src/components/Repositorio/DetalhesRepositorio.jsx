import React from "react";

function DetalhesUsuario(props) {
  const repositorios = props.repos;

  return (
    <div>
      <ul className="list-group">
        {repositorios.map((repositorio) => (
          <li className="list-group-item" key={repositorio.id}>
            <a href={repositorio.html_url}>{repositorio.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetalhesUsuario;
