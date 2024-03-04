"use client";
import { motion } from "framer-motion";
interface props {
  text: string;
  title?: string;
}

const Note: React.FC<props> = ({ text, title }) => {
  return (
    <motion.div
      className="w-full lg:w-80 mt-4 bg-emerald-500 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
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
      <h2 className="text-white p-3 px-4 text-2xl font-bold">{title}</h2>
      <div className="text-white px-4 mb-6">
        <p>{text}</p>
      </div>
    </motion.div>
  );
};

export default Note;
