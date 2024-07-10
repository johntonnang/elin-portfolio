import { CaseProps } from '~types/index';
import Image from 'next/image';
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

const CaseHero: React.FC<CaseProps> = ({
  header,
  description,
  image,
  categories,
}) => {
  return (
    <div className="bg-background-orange mb-[60px] flex h-full w-full">
      <div className="relative mx-auto flex h-full w-screen max-w-[1440px] flex-col-reverse items-center justify-between gap-6 px-4 py-20 xl:h-screen xl:flex-row xl:gap-40 xl:pb-10 xl:pl-16 xl:pr-[137px]">
        <Image
          src={image.image}
          alt={image.alt}
          width="0"
          height="0"
          sizes="100vw"
          quality={100}
          className="h-auto max-h-[450px] w-full object-cover xl:h-full xl:max-h-full xl:w-auto xl:max-w-[580px]"
        />
        <div className="flex w-full flex-col gap-2 xl:gap-6">
          <h1 className="text-32 xl:text-44 font-bold">{header}</h1>
          {description && <p className="text-16 font-medium">{description}</p>}
          <ul className="flex flex-wrap gap-6">
            {categories.map((category) => {
              const IconComponent =
                categoryIconMap[category.title.toLowerCase()] || null;
              return (
                <li
                  key={category._id}
                  className="text-background-white flex items-center gap-2 font-medium"
                >
                  {IconComponent && (
                    <IconComponent
                      className="text-yellow"
                      height={16}
                      width={16}
                    />
                  )}
                  {category.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CaseHero;
