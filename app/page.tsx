import Profile from "@/components/profile";
import StackSection from "@/components/stackSection";

export default async function Home() {
  return (
    <>
      <main className="flex flex-col p-8 md:p-14 min-h-screen w-screen items-center">
        <div className="max-w-5xl">
          <Profile />
          <StackSection />
        </div>
      </main>
    </>
  );
}
