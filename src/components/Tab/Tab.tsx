import React, { useEffect, useState } from 'react';
import styles from './Tab.module.scss';

export interface TabProps {
  icon: string;
  name: string;
  isPinned: boolean;
  className?: string;
  tabId: string;
  onMouseUp?: (position: { x: number, y: number }, tabId: string) => void;
}

const Tab: React.FC<TabProps> = (props) => {
  const [isDragging, setIsDragging] = useState(false); 
  const [position, setPosition] = useState({ x: 0, y: 0 }); 

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



  return (
    <div
      id={props.tabId} 
      className={`${styles.Tab} ${props.className} ${isDragging && styles.drag}`}
      onMouseDown={handleMouseDown}
    >
      <img src={`/icons/tab/${props.icon}`} alt={props.name} className={styles.Icon} />
      {!props.isPinned && <p className={styles.Name}>{props.name}</p>}
    </div>
  );
};



export default Tab;
