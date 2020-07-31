import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom'
import SearchAndFilterField from './SearchAndFilterField';

//smoke test
it('renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchAndFilterField />, div);
  ReactDOM.unmountComponentAtNode(div);
})
