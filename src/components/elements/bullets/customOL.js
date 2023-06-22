import React from 'react'
import {ol} from "./bullet.module.scss"
const CustomOL = ({i}) => {
  return (
    <span className={ol}>{i}</span>
  )
}

export default CustomOL