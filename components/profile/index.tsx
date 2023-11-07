import Image from "next/image";

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 bg-slate-400 rounded-full"></div>

      <div className="flex flex-row gap-2 items-center justify-center mt-3">
        <h1 className="text-white ml-1 text-xl sm:text-2xl">Thiago Chiqueti</h1>
        <Image src="/check.svg" alt="checked" width={20} height={20}></Image>
      </div>
      <p className="text-xs sm:text-md text-slate-300">Desenvolvedor Backend</p>
    </div>
  );
};

export default Profile;
