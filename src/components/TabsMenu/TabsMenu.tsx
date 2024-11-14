import React from 'react';
import styles from './TabsMenu.module.scss';
import Tab, { TabProps } from '../Tab/Tab';

const TabsMenu: React.FC = () => {
  const tabs: TabProps[] = [
    { icon: 'fi-rs-box-alt.svg', name: 'Home', isPinned: true },
    { icon: 'fi-rs-box-alt.svg', name: 'Profile', isPinned: false },
    { icon: 'fi-rs-box-alt.svg', name: 'Settings', isPinned: false },
  ];
  return ( <div className={styles.TabsMenu}>
    {
      tabs 
        &&
        tabs.map((tab, key) => <Tab key={key} isPinned={tab.isPinned} name={tab.name} icon={tab.icon}></Tab>)
      }
  </div>
  )
};

export default TabsMenu;
