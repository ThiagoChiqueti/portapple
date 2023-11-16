'use client'
import { motion } from "framer-motion";

interface props{
    children: React.ReactNode
}
const Animation: React.FC<props> = ({children}) => {
  return (
    <motion.div
    initial={{
      opacity: 0, 
      y: 50     
    }}
    whileInView={{
      opacity: 1,
      y: 0, 
      transition: {
        duration: 0.5
      }
    }}
    viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default Animation;