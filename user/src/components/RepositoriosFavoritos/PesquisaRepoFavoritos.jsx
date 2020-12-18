import React, { useState } from "react";
import axios from "axios";
import DetalhesRepoFavoritos from "./DetalhesRepoFavoritos";
import "../assets/style.css";

function PesquisaRepoFavoritos(props) {
  const nome = props.name;
  const [userFavoriteRepos, setFavoriteRepos] = useState([]);

  const getFavorite = () => {
    const searchInput = nome;
    const userUrl = "https://api.github.com/users/";
    axios
      .get(userUrl + searchInput + "/starred")
      .then(function (response) {
        setFavoriteRepos([...response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="backgroundStarred">
        <button
          type="button"
          className="btn btnStarred"
          onClick={(event) => {
            event.preventDefault();
            getFavorite();
          }}
        >
          Starred
        </button>
        <div>
          <DetalhesRepoFavoritos favo={userFavoriteRepos} />
        </div>
      </div>
    </div>
  );
}

export default PesquisaRepoFavoritos;
