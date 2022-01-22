import Link from 'next/link';
import React from 'react';
import Logo from '../../elements/Logo/Logo';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.header__list}>
        <li className={styles.header__list_item}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.header__list_item}>
          <Link href="/posts">Publicações</Link>
        </li>
        <li className={styles.header__list_item}>
          <Logo w={45} h={61} />
        </li>
        <li className={styles.header__list_item}>
          <Link href="/about" className={styles.header__list_item}>
            Sobre mim
          </Link>
        </li>
        <li className={styles.header__list_item}>
          <Link href="/curriculum" className={styles.header__list_item}>
            Currículo
          </Link>
        </li>
      </ul>
    </header>
  );
}
