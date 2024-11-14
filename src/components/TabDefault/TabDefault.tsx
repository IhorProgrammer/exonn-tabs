import React from 'react';
import styles from './TabDefault.module.scss';
import Tab from '../Tab/Tab';

interface TabDefaultProps {
  icon: string;
  tabId: string;
  name: string;
  className?: string;
  onMouseUp?: (position: { x: number, y: number }, tabId: string) => void;
}

const TabDefault: React.FC<TabDefaultProps> = ( props ) => {
  return (
    <Tab 
    className={`${styles.TabDefault} 
    ${props.className}`} 
    isPinned={false} 
    name={props.name} 
    tabId={props.tabId}
    icon={props.icon}
    onMouseUp={props.onMouseUp}
    ></Tab>
  )
};

export default TabDefault;
