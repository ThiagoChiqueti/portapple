import About from "@/components/about";
import App_icon from "@/components/app_icon";
import Note from "@/components/note";
import Profile from "@/components/profile";
import StackSection from "@/components/stackSection";

export default async function Home() {
  return (
    <>
      <main className="flex flex-col p-8 md:p-14 h-screen w-full items-center">
        <div className="w-full h-auto flex flex-col items-center max-w-4xl">
          <Profile />
          <StackSection />

          <div className="flex flex-row justify-between flex-wrap gap-4 w-full">
            <div className="flex flex-wrap">
              <About />

              <Note
                title="Nota:"
                text="O desenvolvimento deste portifólio foi inspirado em uma
                    fusão de MacOs e Linux."
              />
              
            </div>

            <div className="h-auto mt-4 w-full bg-neutral-800 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-600 mb-40">
              <h2
                className="text-white p-3 px-4 text-2xl font-bold"
                id="#elixir"
              >
                API Elixir:{" "}
              </h2>

              <div className="flex justify-center flex-wrap gap-10">
                <div className="text-white px-4 mb-6">
                  <p className="text-xl"> Principais funcionalidades:</p>
                  <p>Cadastro e consulta de usuários</p>
                  <p>Proteção de senhas com criptografia</p>
                  <p>Autênticação de sessão ativa via token JWT</p>
                  <p>Elixir, Phoenix e Ecto</p>
                  <p>Banco de dados PostgreSQL</p>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center gap-2 mb-3 md:-mt-10">
                  <div className="flex gap-4">
                    <App_icon
                      src="/elixir.svg"
                      alt="Veja o código"
                      height={60}
                      width={60}
                      name="Elixir"
                    />
                    <App_icon
                      src="/postgres.svg"
                      alt="postgres"
                      height={60}
                      width={60}
                      name="Postgres"
                    />
                  </div>
                  <div className="flex gap-4">
                    <App_icon
                      src="/docker.svg"
                      alt="Docker"
                      height={60}
                      width={60}
                      name="Docker"
                    />
                    <App_icon
                      src="/github.svg"
                      alt="Veja o código"
                      height={60}
                      width={60}
                      name="Code"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
