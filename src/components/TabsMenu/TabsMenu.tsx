import React, { useRef, useState } from 'react';
import styles from './TabsMenu.module.scss';
import { TabProps } from '../Tab/Tab';
import TabPinned from '../TabPinned/TabPinned';
import TabDefault from '../TabDefault/TabDefault';

const TabsMenu: React.FC = () => {
  const [tabs, setTabs] = useState<TabProps[]>([
    { icon: 'fi-rs-box-alt.svg', tabId: "tab1", name: 'Nav1', isPinned: true },
    { icon: 'fi-rs-box-alt.svg', tabId: "tab2", name: 'Nav2', isPinned: true, isActive: true },
    { icon: 'fi-rs-box-alt.svg', tabId: "tab3", name: 'Nav3', isPinned: false },
    { icon: 'fi-rs-box-alt.svg', tabId: "tab4", name: 'Nav4', isPinned: false },
    { icon: 'fi-rs-box-alt.svg', tabId: "tab5", name: 'Nav5', isPinned: false },
    { icon: 'fi-rs-box-alt.svg', tabId: "tab6", name: 'Nav6', isPinned: false },
    { icon: 'fi-rs-box-alt.svg', tabId: "tab7", name: 'Nav7', isPinned: false },
    { icon: 'fi-rs-box-alt.svg', tabId: "tab8", name: 'Nav8', isPinned: false },
    { icon: 'fi-rs-box-alt.svg', tabId: "tab9", name: 'Nav9', isPinned: false },
    { icon: 'fi-rs-box-alt.svg', tabId: "tab10", name: 'Nav10', isPinned: false },
    { icon: 'fi-rs-box-alt.svg', tabId: "tab11", name: 'Nav11', isPinned: false },
  ]);

  const tabsContainerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseUp = (position: {x: number, y: number}, tabId: string) => {
    // new index
    const newOldIndex = getNewOldIndex(position, tabId);
    
    console.log(newOldIndex.newIndex, newOldIndex.oldIndex);

    // Копируем текущий массив вкладок
    const newTabs = [...tabs];

    // Меняем местами элементы в массиве
    const temp = newTabs[newOldIndex.oldIndex];
    newTabs[newOldIndex.oldIndex] = newTabs[newOldIndex.newIndex];
    newTabs[newOldIndex.newIndex] = temp;

    // Обновляем состояние с новым порядком вкладок
    setTabs(newTabs);
  };

  const getNewOldIndex = (position: { x: number }, tabId: string): {newIndex: number, oldIndex: number} => {
    let startPos = 0;
    if (tabsContainerRef.current) {
      const rect = tabsContainerRef.current.getBoundingClientRect();
      startPos = rect.left; 
    }
    
    let i = 0;
    let oldIndex = 0;
    let newIndex = 0;
    let newIndexFound = false;
    let oldIndexFound = false;
    let positionAcumulate = startPos; 
    
    for (i = 0; i < tabs.length; i++) {
      if(oldIndexFound && newIndexFound) break;

      if(tabs[i].tabId === tabId) {
        oldIndex = i;
        oldIndexFound = true;
      } 

      if (positionAcumulate > position.x && !newIndexFound) {
        newIndex = i;
        newIndexFound = true;
      }
      if( i === tabs.length - 1 ) {
        newIndex = tabs.length;
      }
      
      const tabElement = document.getElementById(tabs[i].tabId);
      const tabWidth = tabElement ? tabElement.offsetWidth : 150; 
      positionAcumulate += tabWidth; 
    }

    return { oldIndex: oldIndex, newIndex: newIndex - 1};
  };
  const handleClick = (tabId: string) => {
    const updatedTabs = tabs.map(tab => ({
      ...tab,
      isActive: tab.tabId === tabId ? true : false 
    }));

    setTabs(updatedTabs);
  }

  return ( <div className={styles.TabsMenu} ref={tabsContainerRef}>
    {
      tabs 
        &&
        tabs.map((tab, key) => 
          tab.isPinned 
          ?  
          <TabPinned 
          key={key} 
          {...tab}
          onMouseUp={(position, tabId) => handleMouseUp(position, tabId)}
          click={handleClick}
          ></TabPinned>
          :
          <TabDefault 
          key={key} 
          {...tab}
          onMouseUp={(position, tabId) => handleMouseUp(position, tabId)}
          click={handleClick}
          ></TabDefault>
        )
      }
  </div>
  )
};

export default TabsMenu;
