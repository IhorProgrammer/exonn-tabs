import React from 'react';
import ReactDOM from 'react-dom';
import TabDefault from './TabDefault';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TabDefault name='tab-default' icon='icon'/>, div);
  ReactDOM.unmountComponentAtNode(div);
});