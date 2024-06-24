import Animation from "./animation";

const About: React.FC = () => {
  return (
    <Animation>
      <div className="max-w-xl h-auto xl:max-w-2xl mt-4 border-s-2 border-gray-300 text-gray-700">
        <h1 className="px-4 text-2xl font-bold text-sky-500">Sobre</h1>
        <div className="p-4">
          <p>
          Sou apaixonado por tecnologia e desenvolvimento. 
          </p>
          <p>
          Meu foco é criar soluções robustas e eficientes, seja uma API REST, sistema FullStack ou automação.
          Além disso, gosto de cuidar da parte operacional dos meus projetos, garantindo que tudo funcione perfeitamente do início ao fim.
          </p>
          <p>
          Busco me envolver em cada projeto, isso proporciona uma experiência única e permite expandir minhas habilidades e conhecimentos.
          </p>
        </div>
      </div>
    </Animation>
  );
};

export default About;
