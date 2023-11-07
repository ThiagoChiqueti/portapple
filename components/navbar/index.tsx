import App_icon from "../app_icon";
const Navbar: React.FC = () => {
  return (
    <div className="w-full flex flex-row items-center justify-center fixed bottom-5">
      <div className="max-w-sm md:max-w-lg flex flex-row flex-1 items-center justify-center gap-4 p-3 bg-neutral-800 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600 ">
        <App_icon src="/linkedin.svg" alt="Linkedin" height={55} width={55} />
        <App_icon src="/whats.svg" alt="Whatsapp" height={55} width={55} />
        <App_icon src="/instagram.svg" alt="Instagram" height={55} width={55} />
        <App_icon src="/gmail.svg" alt="gmail" height={55} width={55} />
        <App_icon src="/github.svg" alt="github" height={55} width={55} />
      </div>
    </div>
  );
};

export default Navbar;
