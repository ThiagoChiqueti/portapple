import App_icon from "../app_icon";

const StackSection: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-5 sm:gap-10 mt-6">
      <App_icon
        src="/about.svg"
        alt="Sobre"
        height={60}
        width={60}
        name="Sobre"
      />
      <App_icon
        src="/elixir.svg"
        alt="Elixir"
        height={60}
        width={60}
        name="Elixir"
      />
      <App_icon
        src="/node.svg"
        alt="Node"
        height={60}
        width={60}
        name="NodeJs"
      />
      <App_icon
        src="/postgres.svg"
        alt="postgres"
        height={60}
        width={60}
        name="Postgres"
      />
      <App_icon
        src="/docker.svg"
        alt="Docker"
        height={60}
        width={60}
        name="Docker"
      />
    </div>
  );
};

export default StackSection;
