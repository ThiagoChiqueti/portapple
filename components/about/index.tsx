import Animation from "./animation";

const About: React.FC = () => {
  return (
    <Animation>
      <div className="max-w-xl h-auto mt-4 border-s-2 border-gray-300 ">
        <h1 className="text-white px-4 text-2xl font-bold">Sobre</h1>
        <div className="text-white p-4">
          <p>
            Sou um desenvolvedor movido à desafios! Hoje procuro crescimento
            profissional e aprendizado como método de constante evolução.
          </p>
          <p>
            Apaixonado por entender como tudo funciona estou sempre aprendendo
            uma automação nova ou o funcionamento de alguma aplicação/Api
          </p>
        </div>
      </div>
    </Animation>
  );
};

export default About;
