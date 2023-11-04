import Image from "next/image";

const Profile: React.FC = () => {
  return (
    <>
      <div className="w-40 h-40 bg-slate-400 rounded-full"></div>

      <div className="flex flex-row gap-2 items-center justify-center mt-3">
        <h1 className="text-white ml-1 text-2xl">Thiago Chiqueti</h1>
        <Image src="/check.svg" alt="checked" width={20} height={20}></Image>
      </div>
      <p className="text-sm text-slate-300">Desenvolvedor Backend</p>
    </>
  );
};

export default Profile;
