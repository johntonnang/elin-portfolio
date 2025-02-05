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
    <section className="flex h-full w-full bg-background-orange">
      <div className="relative mx-auto flex h-full w-screen max-w-[1440px] flex-col items-center justify-between gap-10 px-4 pb-28 pt-[88px] lg:h-screen lg:flex-row lg:gap-28 lg:py-0 lg:pl-16 lg:pr-[137px]">
        <div className="flex w-full flex-col gap-6">
          <h1 className="font-reenie text-48 lg:text-72">{heading}</h1>
          <p className="dot text-balance text-16 font-semibold lg:text-24">
            {highlightWords(tagline, ['creative', 'human'])}
          </p>
        </div>
        <ul className="absolute bottom-10 right-4 m-0 flex list-none flex-row items-center justify-center gap-4 lg:bottom-16 lg:left-16 lg:right-auto">
          {links &&
            links.map((link, index) => (
              <li key={index}>
                <CustomLink link={link} />
              </li>
            ))}
        </ul>
        <div className="relative h-full max-h-[450px] w-full lg:max-h-full">
          <div className="absolute -bottom-[72px] right-4 flex lg:-left-12 lg:bottom-12">
            <div className="hidden gap-4 lg:flex lg:gap-8">
              <div className="flex flex-col text-48 font-bold">
                <span className="text-background-white lg:text-yellow">2</span>
                <span className="text-yellow">2</span>
              </div>
              <div className="flex flex-col text-48 font-bold text-background-white">
                <span className="text-background-white">0</span>
                <span className="text-yellow lg:text-background-white">5</span>
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
          <p className="absolute bottom-24 left-0 w-2/3 text-center font-reenie text-24 tracking-widest text-yellow lg:-right-28 lg:bottom-[276px] lg:left-auto lg:text-32">
            (Also available for freelance work)
          </p>
          <button onClick={scrollDown} aria-label="Scroll down to projects">
            <ArrowIcon
              className="absolute bottom-9 right-1/2 hidden animate-bounce text-yellow lg:block"
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
