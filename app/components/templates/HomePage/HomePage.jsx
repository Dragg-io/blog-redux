import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';

import styles from './HomePage.module.scss';

import SwiperCore, { EffectCreative, Pagination } from 'swiper';
import MainBanner from '../../modules/MainBanner/MainBanner';
import { useSelector } from 'react-redux';
import Card from '../../modules/Card/Card';

SwiperCore.use([EffectCreative, Pagination]);

export default function HomePage() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };
  const { data } = useSelector((state) => state.posts.posts);
  return (
    <main className={styles.homepage}>
      <Swiper
        pagination={pagination}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          {data?.map((item) =>
            item.sticky ? <MainBanner key={item.id} data={item} /> : '',
          )}
        </SwiperSlide>
      </Swiper>
      <section className={styles.container}>
        {data?.map((item) =>
          !item.sticky ? <Card key={item.id} data={item} /> : '',
        )}
      </section>
    </main>
  );
}
