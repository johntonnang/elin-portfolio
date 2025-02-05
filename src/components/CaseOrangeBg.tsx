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

const CaseOrangeBg: React.FC<CaseProps> = ({
  wip,
  caseNumber,
  header,
  preamble,
  description,
  image,
  categories,
}) => {
  const createSlug = (header: string) => {
    return header
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
  };

  const slug = createSlug(header);

  return (
    <section id="projects" className="flex h-full w-full bg-background-orange">
      <div className="relative mx-auto flex h-full w-screen max-w-[1440px] flex-col justify-center px-4 py-20 xl:h-screen xl:py-0 xl:pl-[142px] xl:pr-[137px]">
        <Link
          className={`w-fit cursor-pointer ${wip ? 'pointer-events-none cursor-default' : ''}`}
          href={`/${slug}`}
        >
          <h2 className="mb-8 flex gap-2 text-40 font-bold">
            <span className="text-yellow">{caseNumber}</span>
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
          <div className="relative flex w-full flex-col overflow-hidden bg-background-white p-10 xl:max-w-[450px] xl:pb-0 xl:pr-14 xl:pt-10">
            <h3 className="mb-6 text-14 uppercase text-background-orange">
              {preamble}
            </h3>
            <p className="mb-8 text-14 font-medium">{description}</p>
            <ul className="m-0 mb-6 flex list-none flex-row flex-wrap gap-4">
              {categories.map((category) => {
                const IconComponent =
                  categoryIconMap[category.title.toLowerCase()] || null;
                return (
                  <li
                    key={category._id}
                    className="flex items-center gap-2 font-medium"
                  >
                    {IconComponent && (
                      <IconComponent
                        className="text-background-orange"
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
              <>
                <div className="absolute -right-14 top-3 flex h-6 w-40 rotate-45 items-center justify-center bg-background-orange">
                  <span className="text-14 font-bold text-background-white">
                    WIP
                  </span>
                </div>
              </>
            )}
          </div>
        </Link>
        {wip && (
          <div className="relative w-full">
            <Link
              href="#contact"
              className="absolute right-0 mt-4 font-reenie text-2xl text-yellow"
            >
              Curious about Navii? Get in touch
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseOrangeBg;
