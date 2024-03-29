"use client";

import { motion } from "framer-motion";


interface props{
    children: React.ReactNode
}

const Animation: React.FC<props> = ({children}) => {
  return (
    <motion.div
 
      initial={{ y: 250 }}
      animate={{
        y: 0,
        transition: {
          duration: 1,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Animation;
