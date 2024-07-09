import { MenuProps } from '~types/index';
import CustomLink from './CustomLink';
import CircleIcon from 'public/svg/circle.svg';
import Link from 'next/link';

const Menu: React.FC<MenuProps> = ({ title, links }) => {
  return (
    <nav className="fixed left-1/2 top-0 z-10 flex h-24 w-full max-w-[1440px] -translate-x-1/2 items-center justify-between pl-16 pr-[68px]">
      <Link href="/" className="flex items-center gap-10">
        <CircleIcon className="text-yellow" width={24} height={24} />
        <span className="text-24 font-bold">{title}</span>
      </Link>
      <ul className="text-24 flex gap-16 font-medium">
        {links &&
          links.map((link, index) => (
            <li key={index}>
              <CustomLink link={link} />
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Menu;
