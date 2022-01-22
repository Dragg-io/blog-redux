import React from 'react';
import Default from '../app/components/layouts/Default/Default';
import CurriculumPage from '../app/components/templates/CurriculumPage/CurriculumPage';

export default function Curriculum() {
  return (
    <Default
      title="Draggio - Curriculum"
      descript="Página de projetos realizados e tecnologias conhecidas"
    >
      <CurriculumPage />
    </Default>
  );
}
