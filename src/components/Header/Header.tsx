import React from 'react';
import styles from './Header.module.scss';
import TabsMenu from '../TabsMenu/TabsMenu';

const Header: React.FC = () => {
  return (
    <div className={styles.Header}>
      <TabsMenu></TabsMenu>
    </div>
  );
};

export default Header;
