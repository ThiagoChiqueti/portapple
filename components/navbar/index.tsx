import App_icon from "../app_icon";
const Navbar: React.FC = () => {
  return (
    <div className="w-full flex flex-row items-center justify-center fixed bottom-5">
      <div className="max-w-lg flex flex-row flex-1 items-center justify-center gap-4 p-3 bg-neutral-800 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600 ">
        <App_icon src="/linkedin.svg" alt="Linkedin" height={60} width={60} />
        <App_icon src="/whats.svg" alt="Whatsapp" height={60} width={60} />
        <App_icon src="/instagram.svg" alt="Instagram" height={60} width={60} />
        <App_icon src="/gmail.svg" alt="gmail" height={60} width={60} />
        <App_icon src="/github.svg" alt="github" height={60} width={60} />
      </div>
    </div>
  );
};

export default Navbar;
