import React, { useState } from "react";
import axios from "axios";
import DetalhesUsuario from "./DetalhesUsuario";
import PesquisaRepositorio from "../Repositorio/PesquisaRepositorio";
import PesquisaRepoFavoritos from "../RepositoriosFavoritos/PesquisaRepoFavoritos";
import "../assets/style.css";

function PesquisaUsuario() {
  const [nome, setNome] = useState("");
  const [userData, setUserData] = useState("");

  const getUser = (searchInput) => {
    const userUrl = "https://api.github.com/users/";
    axios
      .get(userUrl + searchInput)
      .then(function (response) {
        setUserData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <h1>Pesquisar usuário do GitHub</h1>
        <div class="input-group mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={nome}
            onChange={(event) => {
              setNome(event.target.value);
            }}
            placeholder="Digite um usuário"
          />

          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={(event) => {
              event.preventDefault();
              getUser(nome);
            }}
          >
            Buscar
          </button>
        </div>
      </div>
      <div>
        <DetalhesUsuario user={userData} />
        <PesquisaRepositorio name={nome} />
        <PesquisaRepoFavoritos name={nome} />
      </div>
    </div>
  );
}

export default PesquisaUsuario;
