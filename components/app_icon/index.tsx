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
      <div className="bg-white rounded-xl w-12 h-12 sm:w-14 sm:h-14 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <Image
          src={src}
          alt={alt}
          width={60}
          height={60}
          title={alt}
          className="rounded"
        />
      </div>
      <p className="text-white">{name}</p>
    </motion.div>
  );
};

export default App_icon;
