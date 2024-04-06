import { useParams } from 'react-router-dom';
import { useAccommodations } from '../../utils/hooks/hooks';
import Error from '../../components/Error/error';
import styles from './accomodation.module.scss';
import Carousel from '../../components/Carousel/carousel';
import Tag from '../../components/Tag/tag';
import Rating from '../../components/Rating/rating';
import Collapse from '../../components/Collapse/collapse';

function Accommodation() {
  const { id } = useParams(); 
  const { isLoading, error, getAccommodationById } = useAccommodations();

  const accommodation = getAccommodationById(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <Error />; // Render the Error component for fetching error
  }

  if (!accommodation) {
    return <Error />; // Render the Error component for accommodation not found
  }

  // Render accommodation details
  return (
    <>
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
            <section className={styles.accordion_wrapper}>
              <Collapse
                title="Description"
                content={accommodation.description}
              />
              <Collapse
                title="Équipements"
                content={accommodation.equipments}
              />
            </section>
      
  
    </main>




    </>
  );
}

export default Accommodation;