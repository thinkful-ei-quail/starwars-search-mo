import React from 'react';
import './SearchAndFilterField.css';

export default class SearchAndFilterField extends React.Component {
  render() {
    return (
      <form className='searchFilterForm'>
        {/* Text Box */}
        <label htmlFor='search-input'>Search:</label>
        <input id="search-input" type="text" name="search-input" />
        {/* Dropbox */}
        <label htmlFor='search-filter'>Catergory:</label>
        <select name="search-filter" size="1">
          <option value="people">People</option>
          <option value="films">Films</option>
          <option value="planets">Planets</option>
          <option value="species">Species</option>
          <option value="starships">Starships</option>
          <option value="vehicles">Vehicles</option>
        </select>
        <button>Search</button>        
      </form>)
  }
}