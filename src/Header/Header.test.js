import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom'
import Header from './Header';

//smoke test
it('renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
})
