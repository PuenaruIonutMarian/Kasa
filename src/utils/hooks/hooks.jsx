import { useState, useEffect } from 'react';
import requestService from '../../requestService/requestService';

/**
 * Hook personnalisé pour gérer les données d'hébergement dans un composant fonctionnel.
 * @module useAccommodations
 * @returns {Object} Les données d'hébergement, l'état de chargement et les éventuelles erreurs.
 */
export function useAccommodations() {
  /** État local pour stocker les données d'hébergement */
  const [accommodations, setAccommodations] = useState([]);
  /** État local pour indiquer si les données sont en cours de chargement */
  const [isLoading, setLoading] = useState(true);
  /** État local pour indiquer s'il y a eu une erreur lors du chargement des données */
  const [error, setError] = useState(false);

  /**
   * Effet pour récupérer les données d'hébergement lors du montage du composant.
   */
  useEffect(() => {
    /** Service de requête pour récupérer les données d'hébergement */
    const service = new requestService();

    /**
     * Fonction pour récupérer les données d'hébergement.
     */
    const fetchAccommodations = async () => {
      try {
        const data = await service.getAccommodations();
        setAccommodations(data);
        setLoading(false);
      } catch (error) {
        handleFetchError(error);
      }
    };

    fetchAccommodations();
  }, []);

  /**
   * Fonction pour gérer les erreurs lors de la récupération des données d'hébergement.
   * @param {Error} error - L'erreur survenue lors de la récupération des données.
   */
  const handleFetchError = (error) => {
    console.error('Erreur lors de la récupération des hébergements :', error);
    setError(true);
    setLoading(false);
  };

  /**
   * Fonction pour récupérer un hébergement par son identifiant.
   * @param {string} id - L'identifiant de l'hébergement à récupérer.
   * @returns {Object|null} Les données de l'hébergement correspondant à l'identifiant, ou null si aucun hébergement correspondant n'est trouvé.
   */
  const getAccommodationById = (id) => {
    return accommodations.find(item => item.id === id);
  };

  /** Retourne les données d'hébergement, l'état de chargement et les éventuelles erreurs */
  return { accommodations, isLoading, error, getAccommodationById };
}

