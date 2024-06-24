import About from "@/components/about";
import Block from "@/components/block";
import BlockContentApi from "@/components/blockContentApi";
import BlockContentElixir from "@/components/blockContentElixir";
import Container from "@/components/container";
import Download from "@/components/download";
import Note from "@/components/note";
import Profile from "@/components/profile";
import StackSection from "@/components/stackSection";
import Tag_Powered from "@/components/tagPowered";

export default function Home() {
  return (
    <>
      <main className="flex flex-col p-8 md:p-14 h-screen w-full items-center content-center">
        <Container>
          <Profile />

          <div className="w-full">
            <StackSection />
          </div>

          <div className="flex flex-row flex-wrap gap-4 w-full">
            <div className="flex flex-wrap items-around justify-between w-full">
              <About />

              <Note
                title="Objetivo"
                text="Busco trabalhar em um ambiente colaborativo onde eu possa desenvolver novas habilidades, contribuir com minhas ideias e ajudar a construir novos projetos."
              />
            </div>

            <Block>
              <BlockContentApi />
            </Block>

            <Block>
              <BlockContentElixir />
            </Block>
          </div>

          <Tag_Powered />

          <div className="mb-40"></div>
        </Container>
      </main>
    </>
  );
}
