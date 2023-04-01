import React, { useState } from 'react';

function SearchBar(props) {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    props.handleSearch(query, selectedOption1, selectedOption2, selectedOption3, selectedOption4);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleOption2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleOption3Change = (event) => {
    setSelectedOption3(event.target.value);
  };

  const handleOption4Change = (event) => {
    setSelectedOption4(event.target.value);
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" placeholder="Search" value={query} onChange={handleQueryChange} />

      <select name="option1" onChange={handleOption1Change}>
        {props.options1.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <select name="option2" onChange={handleOption2Change}>
        {props.options2.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <select name="option3" onChange={handleOption3Change}>
        {props.options3.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <select name="option4" onChange={handleOption4Change}>
        {props.options4.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
