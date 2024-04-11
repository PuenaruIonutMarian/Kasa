/**
 * Service de requête pour récupérer des données d'hébergement.
 * @module requestService
 */
class requestService {
  /**
   * Crée une instance du service de requête.
   * @constructor
   */
  constructor() {
    /** URL pour récupérer les données d'hébergement */
    this.url = '/data/logements.json';
  }

  /**
   * Récupère les données d'hébergement à partir de l'URL spécifiée.
   * @async
   * @returns {Promise<Array>} Les données d'hébergement au format JSON.
   * @throws {Error} Erreur si la récupération des données échoue.
   */
  async fetchData() {
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error('Impossible de récupérer les données');
      }
      return await response.json();
    } catch (error) {
      throw new Error('Erreur lors de la récupération des données : ' + error.message);
    }
  }

  /**
   * Récupère tous les hébergements.
   * @async
   * @returns {Promise<Array>} Les données de tous les hébergements.
   * @throws {Error} Erreur si la récupération des hébergements échoue.
   */
  async getAccommodations() {
    try {
      const data = await this.fetchData();
      return data;
    } catch (error) {
      throw new Error('Erreur lors de la récupération des hébergements : ' + error.message);
    }
  }

  /**
   * Récupère un hébergement par son identifiant.
   * @async
   * @param {string} id - L'identifiant de l'hébergement à récupérer.
   * @returns {Promise<Object>} Les données de l'hébergement correspondant à l'identifiant.
   * @throws {Error} Erreur si la récupération de l'hébergement échoue ou si aucun hébergement correspondant n'est trouvé.
   */
  async getAccommodationById(id) {
    try {
      const data = await this.fetchData();
      const accommodation = data.find(el => el.id === id);
      if (!accommodation) {
        throw new Error('Hébergement non trouvé');
      }
      return accommodation;
    } catch (error) {
      throw new Error('Erreur lors de la récupération de l\'hébergement par ID : ' + error.message);
    }
  }
}

export default requestService;
