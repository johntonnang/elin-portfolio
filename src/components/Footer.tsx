import { FooterProps } from '~types/index';
import CustomLink from './CustomLink';

const Footer: React.FC<FooterProps> = ({ title, links }) => {
  return (
    <footer id="contact" className="bg-background-orange flex h-full w-full">
      <div className="mx-auto flex h-screen w-screen max-w-[1440px] flex-col px-[137px] py-[138px]">
        <div className="w-fit">
          <h2 className="text-24 text-yellow mb-8 font-bold">{title}</h2>
          <ul className="text-24 mb-12 flex flex-col gap-8 font-semibold">
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
