"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Profile: React.FC= () => {
  return (
    <motion.div
    initial={{y: -500}}
    animate={{ y: 0, 
    transition:{
      duration: 1
    }}}
    
      
    >
      <div className="flex flex-col items-center">
        <div className="w-36 h-36 bg-slate-400 rounded-full flex justify-end items-start overflow-hidden">
          <Image
            src="/perfilThiago.jpeg"
            alt="checked"
            width={150}
            height={200}
          ></Image>
        </div>

        <div className="flex flex-row gap-2 items-center justify-center mt-3">
          <h1 className="text-white ml-1 text-xl sm:text-2xl">
            Thiago Chiqueti
          </h1>
          <Image src="/check.svg" alt="checked" width={20} height={20}></Image>
        </div>
        <p className="text-xs sm:text-md text-slate-300">Desenvolvedor</p>
      </div>
    </motion.div>
  );
};

export default Profile;