import BitcoinAPI from "../bitcoinApi";

const BlockContentApi: React.FC = async () => {
  return (
    <>
      <h2 className="text-gray-700 p-3 px-4 text-xl font-bold" id="#elixir">
        API na prática:{" "}
      </h2>

      <div className="flex justify-around flex-wrap gap-10">
        <div className="text-gray-700 px-4 mb-1 md:mb-6">
          <p className="text-lg"> Consumo de API utilizando AXIOS</p>
          <p>Consulta o preço do Bitcoin a cada 30 segundos</p>
          <p>API utilizada: </p>
          <a href="https://economia.awesomeapi.com.br/last/BTC-BRL" target="_blank">
            <code>economia.awesomeapi.com.br</code>
          </a>
          
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
