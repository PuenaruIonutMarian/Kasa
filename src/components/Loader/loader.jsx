import style from './loader.module.scss';

/**
 * Composant pour afficher un indicateur de chargement.
 * @module Loader
 * @returns {JSX.Element} Le composant représentant l'indicateur de chargement.
 */
export const Loader = () => {
  return (
    <div className={style.loader_wrapper}>
      <div className={style.loader}></div>
    </div>
  );
}
