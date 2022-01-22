import React from 'react';
import Head from 'next/head';
import Header from '../../modules/Header/Header';
import Footer from '../../modules/Footer/Footer';

export default function Default({ title, desc, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
