import React from 'react';
import Car from './Car'; // Import the Car component

const Garage = () => {
  // Step 1: Modify the Garage component to store car information within an array
  const cars = [
    { make: 'Toyota', model: 'Camry', year: 2020 },
    { make: 'Honda', model: 'Civic', year: 2022 },
    { make: 'Ford', model: 'Mustang', year: 2021 },
  ];

  // Step 2: Use the array to render multiple Car components dynamically by mapping over the array
  const renderCars = () => {
    return cars.map((car, index) => (
      <Car key={index} make={car.make} model={car.model} year={car.year} />
    ));
  };

  return (
    <div>
      <h1>My Garage</h1>
      {/* Step 2: Render multiple Car components dynamically */}
      {renderCars()}
    </div>
  );
};

export default Garage;
