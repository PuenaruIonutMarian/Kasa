import styles from "./apropos.module.scss";
import Collapse from "../../components/Collapse/collapse";
import Hero from "../../components/Hero/hero";
import heroImg from "../../assets/about-hero.png";

const qualities = [
  {
    title: "Fiabilité",
    statement:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes",
  },
  {
    title: "Respect",
    statement:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    statement:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Sécurité",
    statement:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

function Apropos() {
  return (
    <>
      <Hero type="apropos" heroImg={heroImg} />
      <main className={`${styles.main} margins`}>
        {qualities.map((quality, index) => (
          <Collapse
            key={index}
            title={quality.title}
            content={quality.statement}
          />
        ))}
      </main>
    </>
  );
}

export default Apropos;
