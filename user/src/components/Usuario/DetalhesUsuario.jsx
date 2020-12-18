import React from "react";

function DetalhesUsuario(props) {
    const data = props.user;

    return (
        <div>
            {data &&
                <ul class="list list-group ">
                    <img className="avatar" src={data.avatar_url} alt="Foto do perfil"></img>
                    <li className="list-group-item"><strong>Login:</strong> {data.login}</li>
                    <li className="list-group-item"><strong>Bio:</strong> {data.bio}</li>
                    <li className="list-group-item"><strong>Companhia:</strong> {data.company}</li>
                    <li className="list-group-item"><strong>Blog:</strong> {data.blog}</li>
                    <li className="list-group-item"><strong>Localização:</strong> {data.location}</li>
                    <li className="list-group-item"><strong>Email</strong>: {data.email}</li>
                    <li className="list-group-item"><strong>Twitter:</strong> {data.twitter_username}</li>
                    <li className="list-group-item"><strong>Repositorios:</strong> {data.public_repos}</li>
                    <li className="list-group-item"><strong>Seguidores:</strong> {data.followers}</li>
                    <li className="list-group-item"><strong>Seguindo:</strong> {data.following}</li>
                    <li className="list-group-item"><strong>Criado:</strong> {data.created_at}</li>
                    <li className="list-group-item"><strong>Atualizado:</strong> {data.updated_at}</li>
                </ul>
            }
        </div>
    );
}


export default DetalhesUsuario;