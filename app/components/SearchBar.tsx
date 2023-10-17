"use client";
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string, jobType: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [jobType, setJobType] = useState('');

  const handleSearch = () => {
    onSearch(query, jobType);
  };

  return (
    <div className="mt-40 mb-10 lg:bg-[#121212] p-4 h-auto md:h-72 sm:h-72 flex flex-col justify-center rounded-lg items-center">
      <div className="relative w-full md:w-[60rem] rounded-lg bg-[#333]" style={{ marginTop: '-100px' }}>
        <input
          type="text"
          placeholder="Search for job..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 w-full md:w-[60rem] bg-[#676464] rounded-lg h-16"
        />
        <button
          onClick={handleSearch}
          className="absolute right-5 top-2 bg-[#242121] text-white py-3 px-10 rounded-lg border-none hover:bg-[#282727] transition-transform transform hover:scale-105 active:scale-95"
        >
          Search
        </button>
      </div>
      <div className="flex flex-row mt-4 space-x-4">
        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          className="px-4 w-36 h-10 md:w-60 bg-[#333] text-white rounded-lg border-none"
        >
          <option value="">Select Type</option>
          <option value="full-time">Full Time</option>
          <option value="part-time">Part Time</option>
          <option value="work-from-home">Work from Home</option>
        </select>
        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          className="px-4 w-36 h-10 md:w-60 bg-[#333] text-white rounded-lg border-none"
        >
          <option value="">Select Type</option>
          <option value="full-time">Full Time</option>
          <option value="part-time">Part Time</option>
          <option value="work-from-home">Work from Home</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;