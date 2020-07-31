import React from 'react';
import './Result.css';

export default class Result extends React.Component {
  static defaultProps = { info: [] }

  render() {
    
    // const information = this.props.info.map(data => dataField)

    
    return (
      <li className='result' key = {this.props.id}>
        {Object.keys(this.props.info).map((key, idx) => {
          const keyField = key.toUpperCase().split('_')
          return (
            <div key={idx}>
              {keyField}: {this.props.info[key]}
            </div>
          )
        })}        
      </li>
    )
  }
}