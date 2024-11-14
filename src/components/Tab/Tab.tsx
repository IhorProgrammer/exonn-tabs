import React from 'react';
import styles from './Tab.module.scss';
import PropTypes from 'prop-types';

export interface TabProps {
  icon: string;
  name: string;
  isPinned: boolean;
}

const Tab: React.FC<TabProps> = ( props ) => {
  console.log(props.isPinned ? "true": "false");

  return (
  <div className={styles.Tab}>
    <img src={`/icons/tab/${props.icon}`} alt={props.name} className={styles.Icon} />
    <p className={styles.Name}>{props.name}</p>
  </div>
  );
};

Tab.propTypes = {
  isPinned: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Tab;
