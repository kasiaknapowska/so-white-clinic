import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const Reveal = ({ children, isActive }) => {
//   const variants = {
//     visible: { opacity: 1, height: "auto" },
//     hidden: { opacity: 0, height: 0 },
//   }
  return (
    <>
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          //   key="content"
          //   variants={variants}
          //   // transition={{ duration: 0.25 }}
          //   initial="hidden"
          //   animate="visible"
          //   exit="hidden"
          style={{overflow: "hidden"}}
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          // transition={{ duration: 0.8 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}

export default Reveal
