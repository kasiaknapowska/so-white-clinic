import React, { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import {wrapper, innerWrapper} from "./motionCarousel.module.scss"
import ButtonWhite from "../../elements/buttonWhite/buttonWhite"

const MotionCarousel = ({ data }) => {
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
          {data.map((el, i) => {
            return (
              <ButtonWhite label={el.label} url={el.url} onPointerDownCapture={e => e.stopPropagation()}/>
            )
          })}
        </motion.div>
      </motion.section>
    )
}

export default MotionCarousel
