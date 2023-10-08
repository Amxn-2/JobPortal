"use client";
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string, jobType: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [jobType, setJobType] = useState(''); // Initialize with an empty value

  const handleSearch = () => {
    onSearch(query, jobType);
  };

  return (
    <div className="fixed mx-auto left-2 right-2 md:left-52 md:right-52 my-40 rounded-lg bg-[#121212] p-4 h-auto md:h-72 flex flex-col justify-center items-center">
      <div className="relative w-full md:w-[60rem] rounded-lg bg-[#333]" style={{ marginTop: '-100px' }}>
        <input
          type="text"
          placeholder="Search for job..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 w-full md:w-[60rem] bg-[#333] rounded-lg h-16"
        />
        <button
          onClick={handleSearch}
          className="absolute right-5 top-2 bg-[#242121] text-white py-3 px-10 rounded-lg border-none hover:bg-[#555]"
        >
          Search
        </button>
      </div>
      <select
        value={jobType}
        onChange={(e) => setJobType(e.target.value)}
        className="mt-4 px-4 w-36 h-10 md:w-60 bg-[#333] text-white rounded-lg border-none"
      >
        <option value="">Select Type</option>
        <option value="full-time">Full Time</option>
        <option value="part-time">Part Time</option>
        <option value="work-from-home">Work from Home</option>
      </select>
    </div>
  );
};

export default SearchBar;
