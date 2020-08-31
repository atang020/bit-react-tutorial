import React from 'react';
import ProductList from './components/product-list';
import TopBar from './components/top-bar';
import VersionOverlay from './components/version-overlay';
import './App.css';

function App() {
  return (
    <>
      <TopBar className="top-bar" />
      <div className="container">
        <ProductList />
        <VersionOverlay buildNum={'12345'} uiEnv={'team-ops'} buildDate={'2020-04-22'} />
      </div>
    </>
  );
}

export default App;
