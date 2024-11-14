import React, { useEffect, useState } from 'react';
import styles from './Tab.module.scss';

export interface TabProps {
  icon: string;
  name: string;
  isPinned: boolean;
  className?: string;
  tabId: string;
  isActive?: boolean;
  onMouseUp?: (position: { x: number, y: number }, tabId: string) => void;
  click?: (tabId: string) => void;
  toPinned?: (tabId: string) => void;
}

const Tab: React.FC<TabProps> = (props) => {
  const [isDragging, setIsDragging] = useState(false); 
  const [position, setPosition] = useState({ x: 0, y: 0 }); 
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    const draggedElement = document.getElementById(props.tabId);
    if (draggedElement) {
      draggedElement.style.transform = `translate(${e.clientX - position.x}px, ${0}px)`;
    }
    
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = (e: MouseEvent) => {
    setIsDragging(false);
    console.log(e.clientX)
    
    if(props.onMouseUp) props.onMouseUp( { x: e.clientX, y: e.clientY }, props.tabId )
    
      const draggedElement = document.getElementById(props.tabId);
    if (draggedElement) {
      draggedElement.style.transform = '';
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);

    };
  }, [isDragging]);

  const handleClick = () => {
    if(props.click) 
      props.click(props.tabId);
  }

  const hanleMouseEnter = () => {
    setIsHovered(true)
  }
  const hanleMouseLeave = () => {
    setIsHovered(false)
  }
  const hanleToPinned = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault(); 
    if(props.toPinned) 
      props.toPinned(props.tabId);

  }

  return (
    <div
      id={props.tabId} 
      className={`${styles.Tab} ${props.className} ${isDragging && styles.drag} ${props.isActive && styles.active}`}
      onMouseEnter={hanleMouseEnter}
      onMouseLeave={hanleMouseLeave}
    >
      <div className={styles.container}
         onMouseDown={handleMouseDown}
         onClick={handleClick}
      >
        <img src={`/icons/tab/${props.icon}`} alt={props.name} className={styles.Icon} />
        {!props.isPinned && <p className={styles.Name}>{props.name}</p>}
      </div>
      {
        isHovered && !isDragging && (
          props.isPinned 
          ?
          <div className={styles.Tooltip} onClick={hanleToPinned}>
            <img src={`/icons/tab/${props.icon}`} alt={props.name} />
            <span>{props.name}</span>
          </div>
          :
          <div className={styles.Tooltip} onClick={hanleToPinned}>
            <img src="/icons/tab/fi-rs-thumbtack.svg" alt="" />
            <span>Tab anpinnen</span>
          </div>
      )}
    </div>
  );
};



export default Tab;
