import React from 'react';
import Result from '../Result/Result';
import './ResultView.css';

export default class ResultView extends React.Component {
  static defaultProps = { searchResults: [] }

  render() {    
    const results = this.props.searchResults.map((result, index) => {
      return <Result key={index} id={index} info={result} />
    })
    return (
      <ul className='results-list'>
        {results}
      </ul>
    )
  }
}