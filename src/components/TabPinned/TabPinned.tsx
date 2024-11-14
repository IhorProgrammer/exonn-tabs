import React from 'react';
import styles from './TabPinned.module.scss';
import Tab from '../Tab/Tab';

interface TabPinnedProps {
  icon: string;
  name: string;
  tabId: string;
  className?: string;
  isActive?: boolean;
  onMouseUp?: (position: { x: number, y: number }, tabId: string) => void;
  click?: (tabId: string) => void;
}

const TabPinned: React.FC<TabPinnedProps> = ( props ) => {
  return (
    <Tab 
    {...props}
    className={`${styles.TabPinned} ${props.className}`} 
    isPinned={true} 
    onMouseUp={props.onMouseUp}
    ></Tab>
  )
};

export default TabPinned;
