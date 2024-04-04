import React from 'react';
import { useAccommodations } from '../../utils/hooks/hooks';
import styles from './home.module.scss';
import Hero from '../../components/Hero/hero';
import heroImg from '../../assets/homepage-hero.png';

function Home() {
  const { accommodations, isLoading, error } = useAccommodations();
  
  return (
    <>
      <Hero
        type="home"
        heroImg={heroImg}
        title="Chez vous, partout et ailleurs"
      />
      <div className={styles.main}>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error fetching accommodations</p>
        ) : (
          accommodations.map(accommodation => (
            <div key={accommodation.id}>
              <h2>{accommodation.title}</h2>
              {/* Render other accommodation details */}
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Home;







//////////////////////////////////////////////////////////////////////////////////////
// import { useEffect, useState } from 'react';
// import styles from "./home.module.scss";
// import Hero from "../../components/Hero/hero";
// import heroImg from "../../assets/homepage-hero.png";
// import requestService from '../../requestService/requestService'; 

// function Home() {
//   const [accommodations, setAccommodations] = useState([]);

//   useEffect(() => {
//     // Create an instance of the requestService class
//     const service = new requestService();

//     // Fetch accommodations data when the component mounts
//     const fetchAccommodations = async () => {
//       try {
//         const data = await service.getAccommodations();
//         setAccommodations(data);
//       } catch (error) {
//         console.error('Error fetching accommodations:', error);
//       }
//     };

//     fetchAccommodations();

//     // Clean up function
//     return () => {
//       // Cleanup logic if needed
//     };
//   }, []); // Empty dependency array to run effect only once on mount

//   return (

//     <>

//       <Hero
//         type="home"
//         heroImg={heroImg}
//         title="Chez vous, partout et ailleurs"
//       />

//       <div className={styles.main}>
//         {/* Render accommodations data */}
//         {accommodations.map((accommodation) => (
//           <div key={accommodation.id}>
//             <h2>{accommodation.title}</h2>
//             {/* Render other accommodation details */}
//           </div>
//         ))}
//       </div>
      
//     </>
//   );

// }


// export default Home;

//////////////////////////////////////////////////////////////////////////////////////////////////

//Second logic to see about
// import React, { useState, useEffect } from 'react';
// import requestService from '../../requestService/requestService';

// function Survey() {
//   const [surveyData, setSurveyData] = useState({});
//   const [isDataLoading, setDataLoading] = useState(true); // Initially set to true

//   useEffect(() => {
//     const service = new requestService();

//     // Use your requestService class to fetch data
//     service.getSurveyData()
//       .then((data) => {
//         setSurveyData(data);
//         setDataLoading(false); // Set to false after data is loaded
//       })
//       .catch((error) => {
//         console.error('Error fetching survey data:', error);
//         setDataLoading(false); // Set to false if there's an error
//       });
//   }, []); // Empty dependency array to run effect only once on mount

//   return (
//     <div>
//       {isDataLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           {/* Render survey data here */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Survey;
