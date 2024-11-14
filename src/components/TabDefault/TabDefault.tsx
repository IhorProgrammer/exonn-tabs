import React from 'react';
import styles from './TabDefault.module.scss';
import Tab from '../Tab/Tab';

interface TabDefaultProps {
  icon: string;
  tabId: string;
  name: string;
  className?: string;
  isActive?: boolean;
  onMouseUp?: (position: { x: number, y: number }, tabId: string) => void;
  click?: (tabId: string) => void;

}

const TabDefault: React.FC<TabDefaultProps> = ( props ) => {
  return (
    <Tab 
    {...props}
    className={`${styles.TabDefault} ${props.className}`} 
    isPinned={false} 
    onMouseUp={props.onMouseUp}
    ></Tab>
  )
};

export default TabDefault;
