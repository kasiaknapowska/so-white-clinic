import React from "react"
import {map} from "./googleMap.module.scss"

const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3034.8576195492847!2d19.006588799416917!3d50.23588822286786!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716cfdb33f146b7%3A0xf1246a82e9bc70e8!2sSo%20White%20Clinic!5e0!3m2!1spl!2spl!4v1692177747609!5m2!1spl!2spl"
      width="1920"
      height="1080"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="google map"
      className={map}
    ></iframe>
  )
}

export default GoogleMap
