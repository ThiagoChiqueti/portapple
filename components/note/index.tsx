"use client";
import { motion } from "framer-motion";
interface props {
  text: string;
  title?: string;
}

const Note: React.FC<props> = ({ text, title }) => {
  return (
    <motion.div
      className="w-full lg:w-80 mt-4 bg-lime-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30"
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
      <h2 className="text-white p-3 px-4 text-2xl font-bold" id="#elixir">
        {title}
      </h2>
      <div className="text-white px-4 mb-6">
        <p>{text}</p>
      </div>
    </motion.div>
  );
};

export default Note;
