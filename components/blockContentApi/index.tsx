import React from "react";
import BitcoinAPI from "../bitcoinApi";

const BlockContentApi: React.FC = async () => {
  return (
    <>
      <h2 className="text-white p-3 px-4 text-2xl font-bold" id="#elixir">
        API na prática:{" "}
      </h2>

      <div className="flex justify-around flex-wrap gap-10">
        <div className="text-white px-4 mb-1 md:mb-6">
          <p className="text-xl"> Consumindo uma Api</p>
          <p>Consulta do preço do bitcoin em tempo real</p>
          <p>A consulta atualiza automaticamente à cada 30 segundos</p>
        </div>
        <div className=" w-56 flex flex-col justify-center items-center gap-2 mb-3 md:-mt-10">
          <div className="flex gap-4">
            <BitcoinAPI />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockContentApi;
