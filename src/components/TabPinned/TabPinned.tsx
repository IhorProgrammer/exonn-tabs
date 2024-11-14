import React from 'react';
import styles from './TabPinned.module.scss';
import Tab from '../Tab/Tab';

interface TabPinnedProps {
  icon: string;
  name: string;
  tabId: string;
  className?: string;
  onMouseUp?: (position: { x: number, y: number }, tabId: string) => void;
}

const TabPinned: React.FC<TabPinnedProps> = ( props ) => {
  return (
    <Tab 
    className={`${styles.TabPinned} 
    ${props.className}`} 
    isPinned={true} 
    name={props.name} 
    icon={props.icon}
    tabId={props.tabId}
    onMouseUp={props.onMouseUp}
    ></Tab>
  )
};

export default TabPinned;
