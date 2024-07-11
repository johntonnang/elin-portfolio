'use client';

import { useState, useEffect } from 'react';
import { MenuProps } from '~types/index';
import CustomLink from './CustomLink';
import CircleIcon from 'public/svg/circle.svg';
import Link from 'next/link';

const Menu: React.FC<MenuProps> = ({ title, links }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="bg-background-orange fixed left-0 top-0 z-30 flex h-16 w-full max-w-[1440px] items-center justify-between px-4 py-4 lg:fixed lg:left-1/2 lg:h-24 lg:-translate-x-1/2 lg:bg-transparent lg:pl-16 lg:pr-[68px]">
        <Link href="/" className="flex items-center gap-10">
          <CircleIcon className="text-yellow" width={24} height={24} />
          <span className="lg:text-24 hidden font-bold lg:block">{title}</span>
        </Link>
        <ul className="text-12 lg:text-24 hidden gap-16 font-medium lg:flex">
          {links &&
            links.map((link, index) => (
              <li key={index}>
                <CustomLink link={link} />
              </li>
            ))}
        </ul>
        <div className="flex items-center lg:hidden">
          <button
            onClick={toggleMenu}
            className="relative z-30 flex flex-col gap-2"
          >
            <span
              className={`block h-0.5 w-8 rounded-full bg-black transition-transform duration-300 ${isMenuOpen ? 'translate-y-[5px] rotate-45' : ''}`}
            ></span>
            <span
              className={`block h-0.5 w-8 rounded-full bg-black transition-transform duration-300 ${isMenuOpen ? '-translate-y-[5px] -rotate-45' : ''}`}
            ></span>
          </button>
        </div>
      </nav>

      <div
        className={`bg-background-orange fixed inset-0 z-20 flex transform flex-col items-center justify-center transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <ul className="text-24 flex flex-col items-center gap-8 font-medium">
          {links &&
            links.map((link, index) => (
              <li key={index}>
                <CustomLink link={link} onClick={toggleMenu} />
              </li>
            ))}
        </ul>
      </div>
    </header>
  );
};

export default Menu;
