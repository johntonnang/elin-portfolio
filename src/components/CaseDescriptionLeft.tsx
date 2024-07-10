'use client';

import { useEffect, useRef, useState } from 'react';
import { CaseProps } from '~types/index';
import Image from 'next/image';
import CircleIcon from 'public/svg/circle.svg';

const CaseDescriptionLeft: React.FC<CaseProps> = ({
  header,
  description,
  image,
}) => {
  const descRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState<number>(0);

  useEffect(() => {
    if (descRef.current) {
      const descHeight = descRef.current.offsetHeight;
      setLineHeight(descHeight + 220);
    }
  }, [description]);

  return (
    <div className="bg-background-white flex h-full w-full">
      <div className="relative mx-auto flex h-full w-screen max-w-[1440px] flex-col items-center justify-center gap-[90px] px-4 pb-8 xl:h-full xl:flex-row xl:px-[137px]">
        <div className="flex h-full w-full flex-col">
          <div ref={descRef} className="flex h-full w-full items-center">
            <p className="text-16 font-medium">{description}</p>
          </div>
        </div>
        <div className="relative flex h-full flex-col items-center gap-8">
          <CircleIcon
            className="text-background-orange"
            width={16}
            height={16}
          />
          <span className="bg-grey w-1" style={{ height: `${lineHeight}px` }} />
          <h1 className="text-24 absolute -top-2 right-12 flex whitespace-nowrap font-medium">
            {header}
          </h1>
        </div>
        <div className="w-full">
          {image && (
            <Image
              src={image.image}
              alt={image.alt}
              width="0"
              height="0"
              sizes="100vw"
              quality={100}
              className="h-auto max-h-[450px] w-full object-cover xl:h-full xl:max-h-full xl:w-full xl:max-w-[580px]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseDescriptionLeft;
