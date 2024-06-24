"use client";
import { motion } from "framer-motion";
interface props {
  text: string;
  title?: string;
}

const Note: React.FC<props> = ({ text, title }) => {
  return (
    <motion.div
      className="w-full lg:w-80 mt-4 rounded-2xl bg-clip-padding bg-slate-100 backdrop-filter backdrop-blur-sm shadow-[0px_10px_15px_0px_#b9b9b9]"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
        },
      }}
      viewport={{ once: true }}
    >
      <h2 className="text-sky-500 p-3 px-4 text-2xl font-bold">{title}</h2>
      <div className="text-gray-700 px-4 mb-6">
        <p>{text}</p>
      </div>
    </motion.div>
  );
};

export default Note;
