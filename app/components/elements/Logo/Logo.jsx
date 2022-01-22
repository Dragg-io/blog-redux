import Image from 'next/image';
import React from 'react';

import logo from '../../../../public/images/logo.svg';

export default function Logo({ w, h }) {
  return (
    <span>
      <Image width={w} height={h} src={logo} />
    </span>
  );
}
