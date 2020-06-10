import React, { Children } from 'react';
import styles from './index.css';

export default props => {
  return (
    <div>
      <h1 className={styles.title}>Product page</h1>
      {props.children}
    </div>
  );
};
