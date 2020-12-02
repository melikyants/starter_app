import React from 'react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Welcome to Bellwether Coffee</strong>
    </div>
  );
};

export default ExploreContainer;
