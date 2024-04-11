import { useParams } from 'react-router-dom';
import { useAccommodations } from '../../utils/hooks/hooks';
import Error from '../../components/Error/error';
import ErrorMessage from '../../components/Error/ErrorMessage';
import styles from './accomodation.module.scss';
import Carousel from '../../components/Carousel/carousel';
import Tag from '../../components/Tag/tag';
import Rating from '../../components/Rating/rating';
import Collapse from '../../components/Collapse/collapse';
import { Loader } from '../../components/Loader/loader';


/**
 * Composant pour afficher les détails d'un hébergement.
 * @module Accommodation
 * @returns {JSX.Element} Le composant affichant les détails de l'hébergement.
 */
function Accommodation() {
  /** Récupération de l'identifiant de l'hébergement depuis les paramètres d'URL */
  const { id } = useParams();
  /** Utilisation du hook useAccommodations pour obtenir les données d'hébergement */
  const { isLoading, error, getAccommodationById } = useAccommodations();
  /** Récupération des détails de l'hébergement correspondant à l'identifiant */
  const accommodation = getAccommodationById(id);

  // Gestion des erreurs
  if (isLoading) {
    return <Loader />;
  } else if (error) {
    return <ErrorMessage />;
  } else if (!accommodation) {
    return <Error />;
  }

  // Rendu des détails de l'hébergement
  return (
    <main className={`${styles.main} margins`}>
      <section>
        <Carousel slides={accommodation.pictures} title={accommodation.title} />
      </section>
      <section className={styles.infos}>
        <div className={styles.acc}>
          <h2>{accommodation.title}</h2>
          <p>{accommodation.location}</p>
          <div className={styles.tag_wrapper}>
            {accommodation.tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
        </div>
        <div className={styles.host}>
          <div className={styles.host_infos}>
            <span>{accommodation.host.name}</span>
            <img
              src={accommodation.host.picture}
              alt={`profile ${accommodation.host.name}`}
            />
          </div>
          <Rating rating={accommodation.rating} />
        </div>
      </section>
      <section className={styles.collapse_wrapper}>
        <Collapse title="Description" content={accommodation.description} />
        <Collapse title="Équipements" content={accommodation.equipments} />
      </section>
    </main>
  );
}

export default Accommodation;
