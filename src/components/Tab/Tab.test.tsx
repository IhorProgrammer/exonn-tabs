import React from 'react';
import ReactDOM from 'react-dom';
import Tab from './Tab';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tab icon="test-icon.png" name="Test Tab" isPinned={true} />, div);
  ReactDOM.unmountComponentAtNode(div);
});