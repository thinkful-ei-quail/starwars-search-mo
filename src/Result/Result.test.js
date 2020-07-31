import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom'
import Result from './Result';

//smoke test
it('renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Result />, div);
  ReactDOM.unmountComponentAtNode(div);
})
