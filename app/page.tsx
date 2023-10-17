"use client"
import React from 'react';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import Jobs from './components/Jobs';

const App: React.FC = () => {
  const handleSearch = (query: string) => {
    // Implement your search logic here
    console.log('Searching for:', query);
    // You can send the query to an API, update state, or perform any other action.
  };

  return (
    <div className="app">
      <Navbar />
      <div className="container mx-auto"> {/* Added container */}
        <SearchBar onSearch={handleSearch} />
        <Jobs />
      </div>
    </div>
  );
};

export default App;

