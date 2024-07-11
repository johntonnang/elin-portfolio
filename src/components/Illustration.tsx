import { FC } from 'react';
import Image from 'next/image';

interface IllustrationProps {
  _type: string;
  description: string;
  image: {
    image: string;
    alt: string;
    hotspot: boolean;
  };
}

const Illustration: FC<IllustrationProps> = ({ description, image }) => {
  return (
    <div className="bg-background-orange relative mb-[126px] flex h-full flex-col items-center justify-center xl:mb-[138px]">
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col items-center justify-center gap-6 p-4 xl:p-16">
        {image && (
          <div className="h-full w-full">
            <Image
              src={image.image}
              alt={image.alt}
              width="0"
              height="0"
              sizes="100vw"
              quality={100}
              className="h-auto w-full object-cover"
            />
          </div>
        )}
        {description && <p className="text-16 font-semibold">{description}</p>}
      </div>
      <span className="bg-grey absolute -bottom-[94px] left-5 h-[62px] w-1 translate-x-1/2 after:content-[''] xl:-bottom-[106px] xl:right-1/2 xl:h-[74px]" />
    </div>
  );
};

export default Illustration;
