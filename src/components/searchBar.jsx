import React, { useState } from 'react';
import searchIcon from '../images/searchIcon.png';
import '../stylesheets/searchBar.css'; 
import { useSearch } from '../context/searchContext';

const SearchBar = () => {
  const { searchInput, setSearchInput } = useSearch();

  const handleChange =async (e) => {
    await setSearchInput(e.target.value);
    console.log(searchInput); // It's not guaranteed to log the updated value immediately due to the asynchronous nature of state updates.
  };

  return (
    <div className='search-container'>
      <form className='search-bar'>
        <input 
          type="text" 
          placeholder="    search..." 
          className="search-input"
          value={searchInput} // Use searchInput from context
          onChange={handleChange}
        />
        <img src={searchIcon} alt="Search Icon" className="search-icon" />
      </form>
    </div>
  );
};


export default SearchBar;
