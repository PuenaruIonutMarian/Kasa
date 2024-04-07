import React from 'react';
import { useAccommodations } from '../../utils/hooks/hooks';
import styles from './home.module.scss';
import Hero from '../../components/Hero/hero';
import heroImg from '../../assets/homepage-hero.png';
import Card from '../../components/Card/card';
import { Loader } from '../../components/Loader/loader';
import ErrorMessage from '../../components/Error/ErrorMessage';

function Home() {
  const { accommodations, isLoading, error } = useAccommodations();
  
  return (
    <>
      <Hero
        type="home"
        heroImg={heroImg}
        title="Chez vous, partout et ailleurs"
      />
      <main className={`${styles.main} margins`}>
        {isLoading ? (
          <Loader />

        ) : error ? (
          <ErrorMessage />
        ) : (
          accommodations.map(accommodation => (
            <Card
              key={accommodation.id}
              title={accommodation.title}
              id={accommodation.id}
              cover={accommodation.cover}
            />

          ))
        )}
      </main>
    </>
  );
}

export default Home;

