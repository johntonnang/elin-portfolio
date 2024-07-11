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
      <div className="mx-auto flex h-full w-screen max-w-[1440px] flex-col items-center justify-between gap-10 px-4 py-20 xl:h-screen xl:flex-row xl:px-[137px] xl:py-0">
        <div className="xl:max-w-[450px]">
          <h2 className="text-48 font-reenie text-background-orange mb-4 max-w-[322px] xl:mb-8">
            {header}
          </h2>
          <PortableText value={description} />
        </div>
        <div className="relative h-full w-full xl:w-auto">
          <Image
            src={image.image}
            alt={image.alt}
            width="0"
            height="0"
            sizes="100vw"
            quality={100}
            className="h-auto max-h-[450px] w-full object-cover xl:h-full xl:max-h-full xl:w-auto"
          />
          <CanvasDraw className="absolute left-0 top-0 h-full w-full" />
          <span className="text-32 text-background-orange font-reenie absolute bottom-28 left-10 hidden w-[170px] -rotate-[7deg] text-center xl:-left-[106px] xl:block">
            Click to draw something
          </span>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnTextImage;
