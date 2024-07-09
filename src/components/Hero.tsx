import { HeroProps } from '~types/index';
import Image from 'next/image';
import CustomLink from './CustomLink';

const Hero: React.FC<HeroProps> = ({ heading, tagline, image, links }) => {
  return (
    <section className="bg-background-orange flex h-full w-full">
      <div className="relative mx-auto flex h-screen w-screen max-w-[1440px] items-center justify-between gap-28 pl-16 pr-[137px]">
        <div className="flex w-full flex-col gap-6">
          <h1 className="text-72 font-reenie text-black">{heading}</h1>
          <p className="text-24 font-semibold text-black">{tagline}</p>
        </div>
        <ul className="absolute bottom-16 left-16 flex items-center justify-center gap-4">
          {links &&
            links.map((link, index) => (
              <li key={index}>
                <CustomLink link={link} />
              </li>
            ))}
        </ul>
        <div className="relative h-full w-full">
          <div className="absolute -left-12 bottom-12 flex">
            <div className="flex gap-8">
              <div className="text-48 text-yellow flex flex-col font-bold">
                <span>2</span>
                <span>2</span>
              </div>
              <div className="text-background-white text-48 flex flex-col font-bold">
                <span>0</span>
                <span>4</span>
              </div>
            </div>
          </div>
          <Image
            src={image.image}
            alt={image.alt}
            width="0"
            height="0"
            sizes="100vw"
            quality={100}
            className="h-full w-auto object-cover"
          />
          <p className="text-32 font-reenie text-yellow absolute -right-28 bottom-[276px] w-2/3 text-center tracking-widest">
            (Also available for freelance work)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
