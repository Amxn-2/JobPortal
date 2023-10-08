"use client"
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
    <div className="fixed mx-auto left-52 right-52 my-40 rounded-lg bg-[#121212] p-4 h-72">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-10px py-2 px-4 bg-[#333] text-white rounded-none border-none focus:ring-0"
      />
      <button
        onClick={handleSearch}
        className="bg-[#333] text-white py-2 px-4 rounded-none border-none ml-4 hover:bg-[#555]"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

