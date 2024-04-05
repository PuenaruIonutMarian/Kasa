import React from 'react';
import { useParams } from 'react-router-dom';
import { useAccommodations } from '../../utils/hooks/hooks';

function Accommodation() {
  const { id } = useParams(); // Extract the accommodation ID from URL parameters
  const { isLoading, error, getAccommodationById } = useAccommodations(); // Import the custom hook

  const accommodation = getAccommodationById(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching accommodation</p>;
  }

  if (!accommodation) {
    return <p>Accommodation not found</p>;
  }

  // Render accommodation details
  return (
    <div>
      <h1>{accommodation.title}</h1>
      {/* Render other details */}
    </div>
  );
}

export default Accommodation;