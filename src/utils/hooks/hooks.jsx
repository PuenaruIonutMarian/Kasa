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
        handleFetchError(error);
      }
    };

    fetchAccommodations();

    // Clean up function
    return () => {
      // Cleanup logic if needed
    };
  }, []);

  const handleFetchError = (error) => {
    console.error('Error fetching accommodations:', error);
    setError(true);
    setLoading(false);
  };

  const getAccommodationById = (id) => {
    return accommodations.find(item => item.id === id);
  };

  return { accommodations, isLoading, error, getAccommodationById };
}
