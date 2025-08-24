import React from 'react';
import { useMapStore } from '../stores/mapStore';

const HomePage: React.FC = () => {
  const { categories, currentCategory, setCategory } = useMapStore();
  
  return (
    <div className="home-page">
      <div className="tabs">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setCategory(category)}
            className={currentCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="content">
        <p>当前选择：{currentCategory}</p>
      </div>
    </div>
  );
};

export default HomePage;
