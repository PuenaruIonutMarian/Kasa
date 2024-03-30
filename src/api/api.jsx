export default class Api {
  constructor() {
    this.url = "/data/logements.json";
  }

  async fetchData() {
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return await response.json();
    } catch (error) {
      throw new Error('Error fetching data: ' + error.message);
    }
  }

  async getAccomodations() {
    try {
      const data = await this.fetchData();
      return data;
    } catch (error) {
      throw new Error('Error getting accommodations: ' + error.message);
    }
  }

  async getAccomodationById(id) {
    try {
      const data = await this.fetchData();
      const accommodation = data.find(el => el.id === id);
      if (!accommodation) {
        throw new Error('Accommodation not found');
      }
      return accommodation;
    } catch (error) {
      throw new Error('Error getting accommodation by ID: ' + error.message);
    }
  }
}
