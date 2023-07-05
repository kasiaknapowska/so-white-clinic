import React, { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { wrapper, wrapperFull, innerWrapper } from "./motionCarousel.module.scss"

const MotionCarousel = ({ fullWidth, children }) => {
  const [width, setWidth] = useState(0)
  const wrapperRef = useRef(null)

  useEffect(() => {
    setWidth(wrapperRef.current.scrollWidth - wrapperRef.current.offsetWidth)
  }, [])

  return (
    <motion.div
      className={fullWidth ? wrapperFull : wrapper}
      ref={wrapperRef}
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className={innerWrapper}
        drag="x"
        dragConstraints={{ right: 0, left: -width - 20 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default MotionCarousel
