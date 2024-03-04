import About from "@/components/about";
import Block from "@/components/block";
import BlockContentApi from "@/components/blockContentApi";
import BlockContentElixir from "@/components/blockContentElixir";
import Container from "@/components/container";
import Note from "@/components/note";
import Profile from "@/components/profile";
import StackSection from "@/components/stackSection";
import Tag_Powered from "@/components/tagPowered";

export default function Home() {
  return (
    <>
      <main className="flex flex-col p-8 md:p-14 h-screen w-full items-center">
        <Container>
          <Profile />
          <StackSection />

          <div className="flex flex-row flex-wrap gap-4 w-full">
            <div className="flex flex-wrap items-around justify-between w-full">
              <About />

              <Note
                title="Objetivo"
                text="Estou me desenvolvendo como programador,
                tenho habilidades focadas no backend e no desenvolvimento de automações, além de conhecer um pouco do mundo frontend."
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
