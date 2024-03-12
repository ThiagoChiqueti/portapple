"use client";
import { motion } from "framer-motion";
interface props {
  children: React.ReactNode;
}

const Block: React.FC<props> = ({ children }: props) => {
  return (
    <motion.div
      className="h-auto mt-4 w-full bg-slate-100 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 shadow-[inset_0px_0px_20px_0px_#4a5568]"
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
