import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Title from '../../elements/Title/Title';

import styles from './MainBanner.module.scss';

export default function MainBanner({ data }) {
  return (
    <Link href={`/post/${data?.id}`}>
      <div className={styles.banner}>
        <div className={styles.banner__title}>
          <Title title={data?.title?.rendered} />
        </div>
        <div className={styles.banner__image}>
          <div
            className={styles.banner__image_content}
            style={{
              backgroundPositionX: data?.acf?.align,
              backgroundImage: `url(${data?.acf?.banner})`,
            }}
          />
        </div>
      </div>
    </Link>
  );
}
