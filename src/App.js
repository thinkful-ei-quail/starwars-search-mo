import React from 'react';
import Header from './Header/Header';
import SearchAndFilterField from './SearchAndFilterField/SearchAndFilterField';
import ResultView from './ResultView/ResultView';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchAndFilterField/>
      <ResultView/>
    </div>
  );
}

export default App;
