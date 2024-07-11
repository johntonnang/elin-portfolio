'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { CaseDescription } from '~types/index';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import CircleIcon from 'public/svg/circle.svg';

const CaseDescriptionLeft: React.FC<CaseDescription> = ({
  header,
  description,
  image,
}) => {
  const descRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState<number>(0);

  const calculateLineHeight = useCallback(() => {
    if (descRef.current) {
      const descHeight = descRef.current.offsetHeight;
      const additionalHeight = window.innerWidth < 768 ? 110 : 220;
      setLineHeight(descHeight + additionalHeight);
    }
  }, []);

  useEffect(() => {
    calculateLineHeight();
    window.addEventListener('resize', calculateLineHeight);
    return () => {
      window.removeEventListener('resize', calculateLineHeight);
    };
  }, [calculateLineHeight]);

  const handleImageLoad = () => {
    calculateLineHeight();
  };

  return (
    <div className="bg-background-white flex h-full w-full">
      <div className="relative mx-auto flex h-full w-screen max-w-[1440px] flex-row-reverse items-center justify-center gap-6 px-4 pb-8 xl:h-full xl:flex-row xl:gap-[90px] xl:px-[137px]">
        <div
          ref={descRef}
          className={`flex h-full w-full flex-col pr-10 xl:pr-0 ${image ? 'gap-8' : 'gap-0'}`}
        >
          <div className="block w-full xl:hidden">
            {image && (
              <Image
                src={image.image}
                alt={image.alt}
                width="0"
                height="0"
                sizes="100vw"
                quality={100}
                className="h-auto max-h-[450px] w-full object-cover xl:h-full xl:max-h-full xl:w-full xl:max-w-[580px]"
                onLoad={handleImageLoad}
              />
            )}
          </div>
          <div className="flex h-full w-full flex-col items-center gap-7">
            <PortableText value={description} />
          </div>
        </div>
        <div className="relative flex h-full flex-col items-center gap-8">
          <CircleIcon
            className="text-background-orange"
            width={16}
            height={16}
          />
          {image || description ? (
            <span
              className="bg-grey w-1"
              style={{ height: `${lineHeight}px` }}
            />
          ) : null}
          <h1 className="text-24 absolute -top-2 left-10 whitespace-nowrap font-medium xl:left-auto xl:right-12">
            {header}
          </h1>
        </div>
        <div className="hidden w-full xl:block">
          {image && (
            <Image
              src={image.image}
              alt={image.alt}
              width="0"
              height="0"
              sizes="100vw"
              quality={100}
              className="h-auto max-h-[450px] w-full object-cover xl:h-full xl:max-h-full xl:w-full xl:max-w-[580px]"
              onLoad={handleImageLoad}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseDescriptionLeft;
