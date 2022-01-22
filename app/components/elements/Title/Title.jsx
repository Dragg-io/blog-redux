import React from 'react';

import styles from './Title.module.scss';

export default function Title({ title, size }) {
  return (
    <h2 className={styles.title} style={{ fontSize: size }}>
      {title}
    </h2>
  );
}
