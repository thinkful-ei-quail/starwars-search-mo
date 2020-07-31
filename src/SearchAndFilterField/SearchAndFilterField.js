import React from 'react';
import './SearchAndFilterField.css';

export default class SearchAndFilterField extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchText: '',
      catergory: 'people',     
    };
    
    this.handleSearchWord = this.handleSearchWord.bind(this);
    this.handleCatergory = this.handleCatergory.bind(this);
  }
  
  
  handleSearchWord(evt) {
    this.setState({
      searchText: evt.target.value
    })
  }
  
  handleCatergory(evt) {
    this.setState({
      catergory: evt.target.value
    })
  }
  
  
  
  render() {
    const catergoryOptions = ["people", "films", "planets", "species", "starships", "vehicles"]
    return (
      <form className='searchFilterForm'>
        {/* Text Box */}
        <label htmlFor='search-input'>Search:</label>
        <input id="search-input" type="text" name="search-input" onChange={this.handleSearchWord}/>
        {/* Dropbox */}
        <label htmlFor='search-filter'>Catergory:</label>
        <select name="search-filter" size="1" onChange={this.handleCatergory}>
          {catergoryOptions.map((catergory, idx) =>
            <option key={idx} value={catergory}>{catergory.charAt(0).toUpperCase() + catergory.slice(1)}</option>
          )}
        </select>
        {/* Search Button */}
        <button onClick={(evt) => {
          this.props.onClick(evt, this.state.searchText, this.state.catergory);
        }}>Search</button>        
      </form>)
  }
}