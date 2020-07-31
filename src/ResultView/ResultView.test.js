import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom'
import ResultView from './ResultView';

//smoke test
it('renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResultView />, div);
  ReactDOM.unmountComponentAtNode(div);
})
