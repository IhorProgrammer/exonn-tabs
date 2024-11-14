import React from 'react';
import styles from './TabPinned.module.scss';
import Tab from '../Tab/Tab';

interface TabPinnedProps {
  icon: string;
  name: string;
  className?: string;
  onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
  onDragOver?: React.DragEventHandler<HTMLDivElement>;
  onDrop?: React.DragEventHandler<HTMLDivElement>;
}

const TabPinned: React.FC<TabPinnedProps> = ( props ) => {
  return (
    <Tab 
    className={`${styles.TabPinned} 
    ${props.className}`} 
    isPinned={true} 
    name={props.name} 
    icon={props.icon}
    onMouseDown={props.onMouseDown}
    onDragOver={props.onDragOver} 
    onDrop={props.onDrop}
    ></Tab>
  )
};

export default TabPinned;
