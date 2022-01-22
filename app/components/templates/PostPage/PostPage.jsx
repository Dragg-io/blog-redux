import React from 'react';
import { useSelector } from 'react-redux';

import MainBanner from '../../modules/MainBanner/MainBanner';

import styles from './PostPage.module.scss';

export default function PostPage() {
  const { data } = useSelector((state) => state.posts.post);
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <MainBanner data={data} />
      </section>
      <section className={styles.container}>
        <div
          className={styles.card__description}
          dangerouslySetInnerHTML={{
            __html: data?.content?.rendered,
          }}
        ></div>
      </section>
    </main>
  );
}
