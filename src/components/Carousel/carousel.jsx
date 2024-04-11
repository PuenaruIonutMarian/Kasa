import React, { useState } from "react";
import styles from "./carousel.module.scss";
import chevronLeft from "./../../assets/chevron_left.svg";
import chevronRight from "./../../assets/chevron_right.svg";

/**
 * Composant pour afficher un carrousel d'images.
 * @module Carousel
 * @param {string} title - Le titre du carrousel.
 * @param {string[]} slides - Les URL des images à afficher dans le carrousel.
 * @returns {JSX.Element} Le composant représentant le carrousel d'images.
 */
function Carousel({ title, slides }) {
  /** État pour suivre l'index de l'image actuellement affichée */
  const [currentIndex, setCurrentIndex] = useState(0);

  /** Fonction pour aller à l'image précédente */
  const goToPrevious = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));

  /** Fonction pour aller à l'image suivante */
  const goToNext = () => setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));

  return (
    <div className={styles.carousel}>
      {slides.length > 1 && (
        <>
          <button className={`${styles.btn} ${styles.btn_left}`} onClick={goToPrevious}>
            <img src={chevronLeft} alt="chevron left" />
          </button>
          <button className={`${styles.btn} ${styles.btn_right}`} onClick={goToNext}>
            <img src={chevronRight} alt="chevron right" />
          </button>
          <span className={styles.photo_index}>
            {currentIndex + 1}/{slides.length}
          </span>
        </>
      )}

      <img className={styles.slide} src={slides[currentIndex]} alt={`${title}`} />
    </div>
  );
}

export default Carousel;
