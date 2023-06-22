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
      <motion.div
        className={wrapper}
        ref={carouselWrapper}
        whileTap={{ cursor: "grabbing" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <motion.div
          className={innerWrapper}
          drag="x"
          dragConstraints={{ right: 0, left: -width - 20 }}
          
        >
          {data.map((el, i) => {
            return (
              <ButtonWhite key={el.label + i} label={el.label} url={el.url} />
            )
          })}
        </motion.div>
      </motion.div>
    )
}

export default MotionCarousel
