"use client";

import { motion } from "framer-motion";


interface props{
    children: React.ReactNode
}

const Animation: React.FC<props> = ({children}) => {
  return (
    <motion.div
 
      initial={{ y: -500 }}
      animate={{
        y: 0,
        transition: {
          duration: 0.6,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Animation;
