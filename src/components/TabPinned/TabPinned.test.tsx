import React from 'react';
import ReactDOM from 'react-dom';
import TabPinned from './TabPinned';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TabPinned icon='icon' name='Name'/>, div);
  ReactDOM.unmountComponentAtNode(div);
});