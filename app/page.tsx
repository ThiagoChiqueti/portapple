import About from "@/components/about";
import Block from "@/components/block";
import BlockContentApi from "@/components/blockContentApi";
import BlockContentElixir from "@/components/blockContentElixir";
import Container from "@/components/container";
import Note from "@/components/note";
import Profile from "@/components/profile";
import StackSection from "@/components/stackSection";

export default function Home() {
  return (
    <>
      <main className="flex flex-col p-8 md:p-14 h-screen w-full items-center">
        <Container>
          <Profile />
          <StackSection />

          <div className="flex flex-row flex-wrap gap-4 w-full">
            <div className="flex flex-wrap items-center w-full">
              <About />

              <Note
                title="Objetivo"
                text="Estou no início de minha carreira e busco uma oportunidade 
                para demonstrar e desenvolver minhas habilidades e talentos. Para compensar a pouca experiência carrego comigo muito empenho e dedicação."
              />
            </div>

            <Block>
              <BlockContentApi />
            </Block>

            <Block>
              <BlockContentElixir />
            </Block>
          </div>

          <div className="mb-40"></div>
        </Container>
      </main>
    </>
  );
}
