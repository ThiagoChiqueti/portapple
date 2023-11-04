import Profile from "@/components/profile";


export default async function Home() {
  
  return (
    <>
      <main className="flex flex-col items-center p-12 md:p-14 min-h-screen w-screen">
        <Profile/>
      </main>
    </>
  );
}
