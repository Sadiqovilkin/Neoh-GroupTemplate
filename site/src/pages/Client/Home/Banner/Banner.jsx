import React from 'react'
import classes from '../Banner/banner.module.css'
const Banner = () => {
  return (
    <section id={classes.banner}>
      <div className={classes.overlay}>
        <div className={classes.bannertext}>
          <h2>Valorant</h2>
          <p >The collection built by and runby codeefly.     <br /> Together we are strong than ever.</p>
        </div>
      </div>
    </section>
  )
}

export default Banner