import React from "react"
import {map} from "./googleMap.module.scss"

const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1276.017248979136!2d19.006454096818636!3d50.235260416464115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716cef99ed4a20b%3A0x5073b63895be5f73!2sMedycyna%20Estetyczna%20Borczyk!5e0!3m2!1spl!2spl!4v1673356633873!5m2!1spl!2spl"
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
