import React from 'react';

import styles from './Card.module.scss';
import MiniBanner from '../MiniBanner/MiniBanner';
import Link from 'next/link';

export default function Card({ data }) {
  return (
    <Link href={`/post/${data?.id}`}>
      <div className={styles.card}>
        <MiniBanner data={data} />
        <div
          className={styles.card__description}
          dangerouslySetInnerHTML={{
            __html: data.excerpt.rendered,
          }}
        ></div>
      </div>
    </Link>
  );
}
