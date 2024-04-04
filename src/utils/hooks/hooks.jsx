import { useState, useEffect } from 'react';
import requestService from '../../requestService/requestService'; 

export function useAccommodations() {
  const [accommodations, setAccommodations] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const service = new requestService();

    const fetchAccommodations = async () => {
      try {
        const data = await service.getAccommodations();
        setAccommodations(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching accommodations:', error);
        setError(true);
        setLoading(false);
      }
    };

    fetchAccommodations();

    // Clean up function
    return () => {
      // Cleanup logic if needed
    };
  }, []);

  const getAccommodationById = async (id) => {
    try {
      const service = new requestService();
      const data = await service.getAccommodationById(id);
      return data;
    } catch (error) {
      console.error('Error fetching accommodation by ID:', error);
      throw new Error('Error fetching accommodation by ID: ' + error.message);
    }
  };

  return { accommodations, isLoading, error, getAccommodationById };
}

