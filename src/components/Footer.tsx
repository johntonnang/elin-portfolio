import { FooterProps } from '~types/index';
import CustomLink from './CustomLink';

const Footer: React.FC<FooterProps> = ({ title, links }) => {
  return (
    <footer id="contact" className="bg-background-orange flex h-full w-full">
      <div className="mx-auto flex h-full w-screen max-w-[1440px] flex-col px-4 py-20 lg:h-screen lg:px-[137px] lg:py-[138px]">
        <div className="w-fit">
          <h2 className="text-24 text-yellow mb-8 font-bold">{title}</h2>
          <ul className="text-24 m-0 mb-12 flex list-none flex-col gap-8 font-semibold">
            {links &&
              links.map((link, index) => (
                <li key={index}>
                  <CustomLink link={link} />
                </li>
              ))}
          </ul>
          <p className="text-yellow font-reenie text-48 ml-16 -rotate-[16deg]">
            Elin Deninger
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
