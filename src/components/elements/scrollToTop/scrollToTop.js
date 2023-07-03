import React, { useState } from "react"
import {scrollBtn} from "./scrollToTop.module.scss"
const isBrowser = typeof window !== "undefined"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  if (isBrowser) {
    window.addEventListener("scroll", () => {
      let y = window.scrollY
      if (y >= window.innerHeight / 2) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    })
  }

  function scroll() {
    if (isBrowser) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }
  return (
    <>
    {isVisible && <button aria-label="scroll to top" className={scrollBtn} onClick={() => scroll()}><div></div></button>}
    </>
    
  )
}

export default ScrollToTop