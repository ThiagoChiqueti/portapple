import React from "react";
import App_icon from "../app_icon";

// import { Container } from './styles';

const BlockContentElixir: React.FC = () => {
  return (
    <>
      <h2 className="text-white p-3 px-4 text-2xl font-bold" id="#elixir">
        API Elixir:{" "}
      </h2>

      <div className="flex justify-around flex-wrap gap-10">
        <div className="text-white px-4 mb-6">
          <p className="text-xl"> Principais funcionalidades:</p>
          <p>Cadastro e consulta de usuários</p>
          <p>Proteção de senhas com criptografia</p>
          <p>Autênticação de sessão ativa via token JWT</p>
          <p>Elixir, Phoenix e Ecto</p>
          <p>Banco de dados PostgreSQL</p>
        </div>
        <div className="w-80 flex flex-col justify-center items-center gap-2 mb-3 md:-mt-10">
         
          <div className="flex gap-6">
            
              <a
                href="https://github.com/ThiagoChiqueti/ElixirApi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <App_icon src="/github.svg" alt="Veja o código" name="Code" />
              </a>
            </div>
          </div>
        </div>
  
    </>
  );
};

export default BlockContentElixir;
