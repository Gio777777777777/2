import React from 'react';
import './App.css'; 
import Text from './components/Text';
import ProductCard from './components/ProductCard';
import Button from './components/Button';

const App = () => {
  return (
    <div className="container">
      <Text fontSize="24px" color="blue" align="center" />
      <ProductCard
        price={29.99}
        quantity={10}
        name="Sample Product"
        description="This is a great product."
        color="green"
      />
      <Button
        text="Click Me"
        backgroundColor="#007bff"
        height="50px"
        width="150px"
      />
    </div>
  );
};

export default App;
