import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { TwoColumnTextImageProps } from '~types/index';
import CanvasDraw from './CanvasDraw';

const TwoColumnTextImage: React.FC<TwoColumnTextImageProps> = ({
  header,
  description,
  image,
}) => {
  return (
    <section id="about" className="bg-background-white flex h-full w-full">
      <div className="mx-auto flex h-screen w-screen max-w-[1440px] items-center justify-between px-[137px]">
        <div className="max-w-[450px]">
          <h2 className="text-48 font-reenie text-background-orange mb-8 max-w-[322px]">
            {header}
          </h2>
          <PortableText value={description} />
        </div>
        <div className="relative h-full">
          <Image
            src={image.image}
            alt={image.alt}
            width="0"
            height="0"
            sizes="100vw"
            quality={100}
            className="h-full w-auto object-cover"
          />
          <CanvasDraw className="absolute left-0 top-0 h-full w-full" />
          <span className="text-32 text-background-orange font-reenie absolute -left-[106px] bottom-28 w-[170px] -rotate-[7deg] text-center">
            Click to draw something
          </span>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnTextImage;
