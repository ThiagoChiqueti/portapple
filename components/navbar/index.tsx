"use client";
import App_icon from "../app_icon";
import Animation from "./animation";
const Navbar: React.FC = () => {
  const copyToCliboard = () => {
    navigator.clipboard.writeText("tchiqueti@gmail.com");
    alert("Email copiado para área de transferência");
  };
  return (
    <Animation>
      <div className="w-full flex flex-row items-center justify-center fixed bottom-5">
        <div className="max-w-sm md:max-w-lg flex flex-row flex-1 items-center justify-center gap-4 p-3 bg-neutral-800 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600 ">
          <a href="https://linkedin.com/in/thiago-chiqueti" target="_blank">
            <App_icon src="/linkedin.svg" alt="Linkedin" />
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=5548988294130&text=Ol%C3%A1%2C%20Thiago%2C%20tudo%20bem%3F%20Acabei%20de%20ver%20seu%20portif%C3%B3lio%20e%20gostaria%20de%20conversar%20mais%20sobre!"
            target="_blank"
          >
            <App_icon src="/whats.svg" alt="Whatsapp" />
          </a>

          <a onClick={copyToCliboard}>
            <App_icon src="/gmail.svg" alt="gmail" />
          </a>

          <a href="https://github.com/ThiagoChiqueti" target="_blank">
            <App_icon src="/github.svg" alt="github" />
          </a>

          <div className="h-16 border-x bg-slate-500"></div>

          <a href="#top">
            <App_icon src="/up.svg" alt="Go up" />
          </a>
        </div>
      </div>
    </Animation>
  );
};

export default Navbar;
