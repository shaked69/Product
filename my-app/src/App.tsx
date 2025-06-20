import React from 'react';
import logo from './logo.svg';
import './App.css';

import ProductCard from './features/ProductCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductCard name='zoey' price={66666666666} imageURL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJAFJ2cCC3gFAubQ8mFa77Oj8KFexvUJkM0A&s'></ProductCard>

      </header>
    </div>
  );
}

export default App;
