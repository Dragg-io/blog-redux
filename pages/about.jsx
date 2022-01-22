import React from 'react';
import Default from '../app/components/layouts/Default/Default';
import AboutPage from '../app/components/templates/AboutPage/AboutPage';

export default function About() {
  return (
    <Default
      title="Draggio - Sobre"
      descript="Página descrevendo quem é Draggio"
    >
      <AboutPage />
    </Default>
  );
}
