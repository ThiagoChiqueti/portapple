import App_icon from "../app_icon";
import Animation from "./animation";

const StackSection: React.FC = () => {
  return (
    <Animation>
      <div className="flex flex-row flex-wrap items-center justify-center gap-5 sm:gap-10 mt-6">
        <App_icon
          src="/react.svg"
          alt="React"
          
          name="React"
        />
        <App_icon
          src="/python.svg"
          alt="Python"
         
          name="Python"
        />

        <a href="#elixir" rel="noopener noreferrer">
          <App_icon
            src="/elixir.svg"
            alt="Elixir"
          
            name="Elixir"
          />
        </a>

        <App_icon
          src="/node.svg"
          alt="Node"
          
          name="NodeJs"
        />
        <App_icon
          src="/postgres.svg"
          alt="postgres"
          
          name="Postgres"
        />
        <App_icon
          src="/docker.svg"
          alt="Docker"
         
          name="Docker"
        />
      </div>
    </Animation>
  );
};

export default StackSection;
