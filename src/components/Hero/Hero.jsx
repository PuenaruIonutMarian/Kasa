import React from "react";
import styles from "./Hero.module.scss";

function Hero({ type, heroImg, title }) {
  return (
    <div className={`${styles.hero} ${styles[type]} pad`}>
      <img src={heroImg} alt="Valley between mountains" />
      {title && <h1>{title}</h1>}
    </div>
  );
}

export default Hero;
