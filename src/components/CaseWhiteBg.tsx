import { CaseProps } from '~types/index';
import Link from 'next/link';
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

const CaseWhiteBg: React.FC<CaseProps> = ({
  wip,
  caseNumber,
  header,
  preamble,
  description,
  image,
  categories,
}) => {
  const createSlug = (header: string) => {
    return header.toLowerCase().replace(/\s+/g, '-');
  };

  const slug = createSlug(header);

  return (
    <section id="projects" className="bg-background-white flex h-full w-full">
      <div className="mx-auto flex h-full w-screen max-w-[1440px] flex-col justify-center px-4 py-20 xl:h-screen xl:py-0 xl:pl-[142px] xl:pr-[137px]">
        <Link
          className={`w-fit cursor-pointer ${wip ? 'pointer-events-none cursor-default' : ''}`}
          href={`/${slug}`}
        >
          <h2 className="text-40 mb-8 flex gap-2 font-bold">
            <span className="text-background-orange">{caseNumber}</span>
            {header}
          </h2>
        </Link>
        <Link
          href={`/${slug}`}
          className={`flex w-full cursor-pointer flex-col gap-10 xl:flex-row ${wip ? 'pointer-events-none cursor-default' : ''}`}
        >
          <Image
            src={image.image}
            alt={image.alt}
            width="0"
            height="0"
            sizes="100vw"
            className="h-full max-h-[350px] w-full object-cover xl:max-h-full xl:max-w-[676px]"
          />
          <div className="bg-background-orange relative flex w-full flex-col overflow-hidden py-10 pl-10 pr-14 xl:max-w-[450px] xl:pb-0 xl:pt-10">
            <h3 className="text-background-white text-14 mb-6 uppercase">
              {preamble}
            </h3>
            <p className="text-14 mb-8 font-medium">{description}</p>
            <ul className="text-background-white gap- m-0 flex w-full list-none flex-row flex-wrap">
              {categories.map((category) => {
                const IconComponent =
                  categoryIconMap[category.title.toLowerCase()] || null;
                return (
                  <li key={category._id} className="flex items-center gap-2">
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
            {wip && (
              <div className="bg-yellow absolute -right-14 top-3 flex h-6 w-40 rotate-45 items-center justify-center">
                <span className="text-background-orange text-14 font-bold">
                  WIP
                </span>
              </div>
            )}
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CaseWhiteBg;
