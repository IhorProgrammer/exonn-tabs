import React, { useRef, useState } from 'react';
import styles from './TabsMenu.module.scss';
import { TabProps } from '../Tab/Tab';
import TabPinned from '../TabPinned/TabPinned';
import TabDefault from '../TabDefault/TabDefault';

const TabsMenu: React.FC = () => {
  const [tabs, setTabs] = useState<TabProps[]>([
    { icon: 'fi-rs-box-alt.svg', tabId: "tab1", name: 'Home', isPinned: true },
    { icon: 'fi-rs-box-alt.svg', tabId: "tab2", name: 'Profile', isPinned: false },
    { icon: 'fi-rs-box-alt.svg', tabId: "tab3", name: 'Settings', isPinned: false },
  ]);

  const tabsContainerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseUp = (position: {x: number, y: number}, tabId: string) => {
    // 1. newIndex
    const targetIndex = getNewIndex(position, tabId);

    const currentIndex = tabs.findIndex(tab => tab.tabId === tabId);
    if (currentIndex === -1 || targetIndex === currentIndex) return; 

    const newTabs = [...tabs];
    const movedTab = newTabs.splice(currentIndex, 1)[0];  
    newTabs.splice(targetIndex, 0, movedTab);  

    setTabs(newTabs);
  };

  const getNewIndex = (position: { x: number }, tabId: string) => {
    let startPos = 0;
    if (tabsContainerRef.current) {
      const rect = tabsContainerRef.current.getBoundingClientRect();
      startPos = rect.left; 
    }

    let positionAcumulate = startPos; 
    let elemPos = 0;

    tabs.forEach((tab, index) => {
      const tabElement = document.getElementById(tab.tabId);
      const tabWidth = tabElement ? tabElement.offsetWidth : 150; 
      positionAcumulate += tabWidth; 

      if (positionAcumulate > position.x) {
        elemPos = index;
        return; 
      }
      
      if (index === tabs.length - 1) {
        elemPos = index + 1; 
      }
    });

    return elemPos;

  };


  return ( <div className={styles.TabsMenu} ref={tabsContainerRef}>
    {
      tabs 
        &&
        tabs.map((tab, key) => 
          tab.isPinned 
          ?  
          <TabPinned 
          key={key} 
          name={tab.name} 
          tabId={tab.tabId}
          icon={tab.icon} 
          onMouseUp={(position, tabId) => handleMouseUp(position, tabId)}
          ></TabPinned>
          :
          <TabDefault 
          key={key} 
          name={tab.name} 
          tabId={tab.tabId}
          icon={tab.icon}
          onMouseUp={(position, tabId) => handleMouseUp(position, tabId)}
          ></TabDefault>
        )
      }
  </div>
  )
};

export default TabsMenu;
