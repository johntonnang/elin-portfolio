'use client';

import { HeroProps } from '~types/index';
import Image from 'next/image';
import CustomLink from './CustomLink';
import ArrowIcon from 'public/svg/arrow.svg';

const highlightWords = (text: string, wordsToHighlight: string[]) => {
  const parts = text.split(new RegExp(`(${wordsToHighlight.join('|')})`, 'gi'));
  return parts.map((part, index) =>
    wordsToHighlight.includes(part.toLowerCase()) ? (
      <span key={index} className="text-yellow">
        {part}
      </span>
    ) : (
      part
    )
  );
};

const Hero: React.FC<HeroProps> = ({ heading, tagline, image, links }) => {
  const scrollDown = () => {
    const projects = document.getElementById('projects');
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-background-orange flex h-full w-full">
      <div className="relative mx-auto flex h-full w-screen max-w-[1440px] flex-col items-center justify-between gap-6 px-4 py-20 lg:h-screen lg:flex-row lg:gap-28 lg:py-0 lg:pl-16 lg:pr-[137px]">
        <div className="flex w-full flex-col gap-2 lg:gap-6">
          <h1 className="text-48 font-reenie lg:text-72 text-black">
            {heading}
          </h1>
          <p className="text-16 lg:text-24 dot text-balance font-semibold text-black">
            {highlightWords(tagline, ['creative', 'human'])}
          </p>
        </div>
        <ul className="absolute bottom-8 left-8 flex items-center justify-center gap-4 lg:bottom-16 lg:left-16">
          {links &&
            links.map((link, index) => (
              <li key={index}>
                <CustomLink link={link} />
              </li>
            ))}
        </ul>
        <div className="relative h-full w-full">
          <div className="absolute bottom-0 left-6 flex lg:-left-12 lg:bottom-12">
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
            priority
            className="h-auto max-h-[450px] w-full object-cover lg:h-full lg:max-h-full lg:w-auto"
          />
          <p className="text-24 lg:text-32 font-reenie text-yellow absolute bottom-[80%] right-2 w-2/3 text-center tracking-widest lg:-right-28 lg:bottom-[276px]">
            (Also available for freelance work)
          </p>
          <button onClick={scrollDown}>
            <ArrowIcon
              className="text-yellow absolute bottom-9 right-1/2 hidden animate-bounce lg:block"
              width={40}
              height={40}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
