import React from 'react';
import ReactDOM from 'react-dom';
import TabsMenu from './TabsMenu';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TabsMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});