import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange, count }) => {
  const resultString = { count } !== undefined ? `${count} found` : '';
  return (
    <div>
      <input
        type='search'
        className='search'
        placeholder={placeholder}
        onChange={handleChange}
      />
      <p id='list-count'>{resultString} </p>
    </div>
  );
};
