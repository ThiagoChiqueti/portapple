import Animation from "./animation";

const About: React.FC = () => {
  return (
    <Animation>
      <div className="max-w-xl h-auto xl:max-w-2xl mt-4 border-s-2 border-gray-300 ">
        <h1 className="text-white px-4 text-2xl font-bold">Sobre</h1>
        <div className="text-white p-4">
          <p>
            Sou o tipo de pessoa que monta e desmonta tudo para entender o funcionamento.
            Sempre busco uma maneira de melhorar meu trabalho através da tecnologia e ganho muito aprendizado fazendo isso, seja fazendo uma automação para coletar dados 
            ou até mesmo algum projeto com Arduino.
          </p>
          <p>
            Sou apaixonado por entender como tudo funciona e sou 1000% focado no meu trabalho.
          </p>
        </div>
      </div>
    </Animation>
  );
};

export default About;
