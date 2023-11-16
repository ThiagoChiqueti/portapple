'use client'
import { motion } from "framer-motion";
import Image from "next/image";

interface props {
  src: string;
  alt: string;
  width: number;
  height: number;
  name?: string;
}

const App_icon: React.FC<props> = ({ src, alt, width, height, name }) => {
  return (
    <motion.div
      className="flex flex-col items-center cursor-pointer"
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="bg-white rounded-xl">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          title={alt}
          className="rounded"
        />
      </div>
      <p className="text-white">{name}</p>
    </motion.div>
  );
};

export default App_icon;
