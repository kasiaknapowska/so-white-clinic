import React, { useEffect, useState, useRef } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

import { wrapper, innerWrapper, image } from "./carousel.module.scss"

const Carousel = ({ carouselImg }) => {
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
      style={{paddingTop: 0, marginTop: 0}}
    >
      <motion.div
        className={innerWrapper}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {carouselImg.map((el, i) => {
          const img = getImage(el)
          console.log(el.name)
          return (
            <GatsbyImage
              image={img}
              key={"gabinet" + i}
              alt={el.name}
              className={image}
            />
          )
        })}
      </motion.div>
    </motion.section>
  )
}

export default Carousel