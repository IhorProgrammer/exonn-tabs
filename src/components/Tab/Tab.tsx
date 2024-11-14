import React, { useEffect, useState } from 'react';
import styles from './Tab.module.scss';

export interface TabProps {
  icon: string;
  name: string;
  isPinned: boolean;
  className?: string;
  onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
  onDragOver?: React.DragEventHandler<HTMLDivElement>;
  onDrop?: React.DragEventHandler<HTMLDivElement>;
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

    const deltaX = e.clientX - position.x; 
    const deltaY = e.clientY - position.y; 

    setPosition({ x: e.clientX, y: e.clientY });

    const draggedElement = document.getElementById('dragged-tab');
    if (draggedElement) {
      draggedElement.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
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
      id="dragged-tab" 
      className={`${styles.Tab} ${props.className}`}
      onMouseDown={handleMouseDown}
    >
      <img src={`/icons/tab/${props.icon}`} alt={props.name} className={styles.Icon} />
      {!props.isPinned && <p className={styles.Name}>{props.name}</p>}
    </div>
  );
};



export default Tab;
