import React from 'react';
import Header from './Header/Header';
import SearchAndFilterField from './SearchAndFilterField/SearchAndFilterField';
import ResultView from './ResultView/ResultView';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      findings: {}
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(evt, search, catergory) {
    evt.preventDefault();
    console.log('Please Work');
    console.log(search, catergory);
    const url = `https://swapi-thinkful.herokuapp.com/api/${catergory}/?search=${search}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          findings: data
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchAndFilterField onClick={this.handleSearch} />
        <ResultView searchResults={this.state.findings.results} />
      </div>
    );
  }
}


