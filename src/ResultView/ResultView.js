import React from 'react';
import Result from '../Result/Result';
import './ResultView.css';

export default class ResultView extends React.Component {
  render() {
    return <ul>
      Result list here
      <Result/>
    </ul>
  }
}