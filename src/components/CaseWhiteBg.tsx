import { CaseProps } from '~types/index';
import Image from 'next/image';
import { FC } from 'react';
import CircleIcon from 'public/svg/circle-small.svg';
import TriangleIcon from 'public/svg/triangle.svg';
import StarIcon from 'public/svg/star.svg';
import SquareIcon from 'public/svg/square.svg';

const categoryIconMap: {
  [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
} = {
  'digital design': CircleIcon,
  ux: TriangleIcon,
  'copy writing': TriangleIcon,
  research: StarIcon,
  'art direction': SquareIcon,
  'motion graphic design': SquareIcon,
};

const CaseWhiteBg: FC<CaseProps> = ({
  caseNumber,
  header,
  preamble,
  description,
  image,
  categories,
}) => {
  return (
    <section id="projects" className="bg-background-white flex h-full w-full">
      <div className="mx-auto flex h-screen w-screen max-w-[1440px] flex-col justify-center pl-[142px] pr-[137px]">
        <h2 className="text-40 mb-8 flex gap-2 font-bold">
          <span className="text-background-orange">{caseNumber}</span>
          {header}
        </h2>
        <div className="flex w-full gap-10">
          <Image
            src={image.image}
            alt={image.alt}
            width="0"
            height="0"
            sizes="100vw"
            className="h-full w-full object-cover"
          />
          <div className="bg-background-orange flex w-full max-w-[450px] flex-col py-10 pl-10 pr-14">
            <h3 className="text-background-white text-14 mb-6 uppercase">
              {preamble}
            </h3>
            <p className="text-14 mb-8 font-medium">{description}</p>
            <ul className="text-background-white flex flex-wrap gap-4">
              {categories.map((category) => {
                const IconComponent =
                  categoryIconMap[category.title.toLowerCase()] || null;
                return (
                  <li key={category._id} className="flex items-center gap-2">
                    {IconComponent && <IconComponent className="text-yellow" />}
                    {category.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseWhiteBg;
