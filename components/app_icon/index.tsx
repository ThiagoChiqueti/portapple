'use client'
import { motion } from "framer-motion";
import Image from "next/image";

interface props {
  src: string;
  alt: string;
  name?: string;
}

const App_icon: React.FC<props> = ({ src, alt, name }) => {
  return (
    <motion.div
      className="flex flex-col items-center cursor-pointer"
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="flex justify-center items-center bg-slate-100 rounded-xl w-12 h-12 sm:w-14 sm:h-14 shadow-[0px_5px_10px_0px_#b9b9b9]">
        <Image
          src={src}
          alt={alt}
          width={45}
          height={45}
          title={alt}
          className="rounded"
        />
      </div>
      <p className="">{name}</p>
    </motion.div>
  );
};

export default App_icon;
