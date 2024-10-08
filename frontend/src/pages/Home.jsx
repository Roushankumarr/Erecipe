import React, { useState } from 'react';
import RecipeContainer from '../components/RecipeContainer';


const Home = () => {
  const [filter, setFilter] = useState({});

  const handleFilterChange = (filterType) => {
    switch (filterType) {
      case 'rating':
        // Toggle rating filter
        setFilter((prev) => ({
          ...prev,
          rating: prev.rating ? undefined : 4.3,  
        }));
        break;
      case 'veg':
        // Toggle veg filter
        setFilter((prev) => ({
          ...prev,
          veg: prev.veg ? undefined : true,
        }));
        break;
    
      default:
        break;
    }
  };

  return (
    <div>
      
      <RecipeContainer filter={filter} />
      
    </div>
  );
};

export default Home;

