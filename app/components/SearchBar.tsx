"use client";
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="fixed mx-auto left-52 right-52 my-40 rounded-lg bg-[#121212] p-4 h-72 flex flex-col justify-center items-center">
      <div className="relative left-20 right-20 w-96 rounded-lg bg-[#333]">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mt- py-2 px-4 rounded-lg bg-[#333] text-white border-none focus:ring-0"
        />
        <button
          onClick={handleSearch}
          className="absolute right-0 top-0 bg-[#333] text-white py-2 px-4 rounded-lg border-none hover:bg-[#555]"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
