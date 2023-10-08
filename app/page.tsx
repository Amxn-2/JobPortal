"use client"
import React from 'react';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const handleSearch = (query: string) => {
    // Implement your search logic here
    console.log('Searching for:', query);
    // You can send the query to an API, update state, or perform any other action.
  };

  return (
    <div className="app">
      <Navbar />
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default App;
