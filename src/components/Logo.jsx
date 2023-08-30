import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
const Logo = ({ className, props }) => {
  return (
    <Link href="/">
      <h2
        className={clsx(
          'font-bold hover:text-orange-900 duration-300',
          className
        )}
        {...props}
      >
        <span className="text-4xl lg:text-6xl text-orange-700">LD</span>
        <span className="text-orange-500 uppercase text-lg">
          Personalvermittlung
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
