"use client";
import { motion } from "framer-motion";
interface props {
  children: React.ReactNode;
}

const Block: React.FC<props> = ({ children }: props) => {
  return (
    <motion.div
      className="h-auto mt-4 w-full bg-neutral-800 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-600"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 2,
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default Block;
