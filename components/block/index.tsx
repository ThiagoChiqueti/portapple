"use client";
import { motion } from "framer-motion";
interface props {
  children: React.ReactNode;
}


const Block: React.FC<props> = ({ children }: props) => {
  return (
    <motion.div
      className="h-auto mt-4 w-full rounded-2xl bg-clip-padding bg-slate-100 backdrop-filter backdrop-blur-sm bg-opacity-80 shadow-[0px_10px_15px_0px_#b9b9b9]"
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
