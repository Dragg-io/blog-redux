import React from 'react';
import Title from '../../elements/Title/Title';

import styles from './MiniBanner.module.scss';

export default function MiniBanner({ data }) {
  return (
    <div className={styles.minibanner}>
      <div className={styles.minibanner__title}>
        <Title title={data?.title?.rendered} size="50px" />
      </div>
      <div className={styles.minibanner__image}>
        <div
          className={styles.minibanner__image_content}
          style={{ backgroundImage: `url(${data?.acf?.banner})` }}
        />
      </div>
    </div>
  );
}
