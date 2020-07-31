import React from 'react';
import './Result.css';

export default class Result extends React.Component {
  static defaultProps = { info: [] }

  render() {
    
    // const information = this.props.info.map(data => dataField)

    
    return (
      <li className='result' key = {this.props.key }>
        {Object.keys(this.props.info).map(key => {
          const keyField = key.toUpperCase().split('_')
          return (
            <div >
              {keyField}: {this.props.info[key]}
            </div>
          )
        })}        
      </li>
    )
  }
}