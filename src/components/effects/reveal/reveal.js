import React from "react"
import { motion } from "framer-motion"

const Reveal = ({ isActive, children }) => {
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: "-20%" },
  }
  return (
    <motion.div
      animate={isActive ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay: 0.1 }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
