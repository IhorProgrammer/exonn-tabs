import React, { useState } from 'react';
import styles from './TabsMenu.module.scss';
import { TabProps } from '../Tab/Tab';
import TabPinned from '../TabPinned/TabPinned';
import TabDefault from '../TabDefault/TabDefault';

const TabsMenu: React.FC = () => {
  const [tabs, setTabs] = useState<TabProps[]>([
    { icon: 'fi-rs-box-alt.svg', name: 'Home', isPinned: true },
    { icon: 'fi-rs-box-alt.svg', name: 'Profile', isPinned: false },
    { icon: 'fi-rs-box-alt.svg', name: 'Settings', isPinned: false },
  ]);

  const handleMouseDown = (index: number) => {
  };

  const handleDrop = (e: React.MouseEvent, index: number) => {

  };

  // Функция для предотвращения стандартного поведения (чтобы можно было вставить элемент)
  const handleDragOver = (e: React.DragEvent) => {
  };


  return ( <div className={styles.TabsMenu}>
    {
      tabs 
        &&
        tabs.map((tab, key) => 
          tab.isPinned 
          ?  
          <TabPinned 
          key={key} 
          name={tab.name} 
          icon={tab.icon} 
          onMouseDown={() => handleMouseDown(key)}
          onDragOver={handleDragOver} 
          onDrop={(e) => handleDrop(e, key)}
          ></TabPinned>
          :
          <TabDefault 
          key={key} 
          name={tab.name} 
          icon={tab.icon}
          onMouseDown={() => handleMouseDown(key)}
          onDragOver={handleDragOver} 
          onDrop={(e) => handleDrop(e, key)}
          ></TabDefault>
        )
      }
  </div>
  )
};

export default TabsMenu;
