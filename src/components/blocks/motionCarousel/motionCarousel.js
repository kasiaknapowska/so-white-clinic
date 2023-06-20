import React, { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

const MotionCarousel = ({ children }) => {
  const [width, setWidth] = useState(0)
  const carouselWrapper = useRef()

  useEffect(() => {
    setWidth(
      carouselWrapper.current.scrollWidth - carouselWrapper.current.offsetWidth
    )
  }, [])

  return (
    <motion.section
      className={wrapper}
      ref={carouselWrapper}
      whileTap={{ cursor: "grabbing" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <motion.div
        className={innerWrapper}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {children}
      </motion.div>
    </motion.section>
  )
}

export default MotionCarousel
