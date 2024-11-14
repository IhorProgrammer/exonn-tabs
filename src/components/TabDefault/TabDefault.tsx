import React from 'react';
import styles from './TabDefault.module.scss';
import Tab from '../Tab/Tab';

interface TabDefaultProps {
  icon: string;
  name: string;
  className?: string;
  onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
  onDragOver?: React.DragEventHandler<HTMLDivElement>;
  onDrop?: React.DragEventHandler<HTMLDivElement>;
}

const TabDefault: React.FC<TabDefaultProps> = ( props ) => {
  return (
    <Tab 
    className={`${styles.TabDefault} 
    ${props.className}`} 
    isPinned={false} 
    name={props.name} 
    icon={props.icon}
    onMouseDown={props.onMouseDown}
    onDragOver={props.onDragOver} 
    onDrop={props.onDrop}
    ></Tab>
  )
};

export default TabDefault;
