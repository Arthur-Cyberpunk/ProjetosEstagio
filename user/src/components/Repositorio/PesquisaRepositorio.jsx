import React, { useState } from "react";
import axios from "axios";
import DetalhesRepositorio from "./DetalhesRepositorio";
import "../assets/style.css";

function PesquisaRepositorio(props) {
  const nome = props.name;
  const [userRepos, setUserRepos] = useState([]);

  const getRepos = () => {
    const searchInput = nome;
    const userUrl = "https://api.github.com/users/";
    axios
      .get(userUrl + searchInput + "/repos")
      .then(function (item) {
        setUserRepos([...item.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="backgroundRepos">
        <button
          type="button"
          className="btn btnRepos"
          onClick={(event) => {
            event.preventDefault();
            getRepos();
          }}
        >
          Repositories
        </button>
      </div>
      <div>
        <DetalhesRepositorio repos={userRepos} />
      </div>
    </div>
  );
}

export default PesquisaRepositorio;
