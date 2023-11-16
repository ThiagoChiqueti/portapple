import Animation from "./animation";

const About: React.FC = () => {
  return (
    <Animation>
      <div className="max-w-xl h-64 mt-4 border-s-2 border-gray-300 ">
        <h1 className="text-white px-4 text-2xl">Sobre:</h1>
        <div className="text-white p-4">
          <p>
            O Thiago é um desenvolvedor movido à desafios! Hoje busca
            crescimento profissional e aprendizado como método de constante
            evolução.
          </p>
          <p>
            Apaixonado por entender como tudo funciona está sempre aprendendo
            uma automação nova ou o funcionamento de alguma aplicação
          </p>
        </div>
      </div>
    </Animation>
  );
};

export default About;
