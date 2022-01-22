import React from 'react';
import Logo from '../../elements/Logo/Logo';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo w={61} h={70} />
      <p className={styles.footer__paragraph}>
        Grimória. Todos os direitos reservados.
      </p>
      <p className={styles.footer__paragraph}>2022</p>
    </footer>
  );
}
