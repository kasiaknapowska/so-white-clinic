import React from 'react'
import {olBullet} from "./bullet.module.scss"
const OlBullet = ({i}) => {
  return (
    <span className={olBullet}>{i}</span>
  )
}

export default OlBullet