import { ResumeProps } from '~types/index';
import CircleIcon from 'public/svg/circle-small.svg';
import TriangleIcon from 'public/svg/triangle.svg';
import StarIcon from 'public/svg/star.svg';
import SquareIcon from 'public/svg/square.svg';
import React from 'react';
import Link from 'next/link';

const experienceIconMapping = [StarIcon, TriangleIcon];
const educationIconMapping = [CircleIcon, SquareIcon];

const Resume: React.FC<ResumeProps> = ({
  experience,
  education,
  achievements,
  resumeFile,
}) => {
  return (
    <section id="resume" className="bg-background-orange flex h-full w-full">
      <div className="mx-auto flex h-full w-screen max-w-[1440px] flex-col justify-between gap-10 px-4 py-20 xl:h-screen xl:flex-row xl:gap-0 xl:px-[137px] xl:pb-[168px] xl:pt-[185px]">
        <div className="relative flex h-full w-full flex-col justify-between xl:w-[530px]">
          <div>
            <h2 className="text-24 text-yellow mb-4 font-bold">Experience</h2>
            <ul className="m-0 flex list-none flex-col gap-10">
              {experience.map((exp, index) => (
                <li key={`${exp._id}-${index}`}>
                  <h3 className="text-16 xl:text-32 flex items-center gap-4 font-bold">
                    {exp.role}{' '}
                    {React.createElement(
                      experienceIconMapping[
                        index % experienceIconMapping.length
                      ],
                      {
                        className: 'text-yellow',
                        width: 16,
                        height: 16,
                      }
                    )}
                    {exp.company}
                  </h3>
                  <p className="text-16 mb-4 font-medium uppercase tracking-widest">
                    {exp.date}
                  </p>
                  <p className="text-14 font-medium">{exp.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden items-center gap-4 xl:flex">
            <StarIcon className="text-yellow" width={16} height={16} />
            <Link
              href={resumeFile.asset.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-24 text-yellow font-bold underline"
            >
              Full resume
            </Link>
          </div>
        </div>
        <div className="flex h-full w-full flex-col justify-end xl:w-96">
          <h3 className="text-24 text-yellow mb-4 font-bold">Education</h3>
          <ul className="m-0 flex list-none flex-row">
            {education.map((edu, index) => (
              <li key={`${edu._id}-${index}`} className="mb-10">
                <h3 className="text-16 xl:text-32 flex items-center gap-4 font-bold">
                  {edu.school}{' '}
                  {React.createElement(
                    educationIconMapping[index % educationIconMapping.length],
                    {
                      className: 'text-yellow',
                      width: 16,
                      height: 16,
                    }
                  )}
                  {edu.degree}
                </h3>
                <p className="text-16 font-medium uppercase tracking-widest">
                  {edu.date}
                </p>
              </li>
            ))}
          </ul>
          <h3 className="text-24 text-yellow mb-4 font-bold">Achievements</h3>
          <ul className="m-0 flex list-none flex-row">
            {achievements.map((ach, index) => (
              <li key={`${ach._id}-${index}`}>
                <h3 className="text-16 xl:text-32 flex items-center gap-4 font-bold">
                  {ach.achievement}{' '}
                  <SquareIcon className="text-yellow" width={16} height={16} />{' '}
                </h3>
                <p className="text-16 xl:text-32 font-bold">{ach.from}</p>
                <p className="text-16 font-medium uppercase tracking-widest">
                  {ach.date}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4 xl:hidden">
          <StarIcon className="text-yellow" width={16} height={16} />
          <Link
            href={resumeFile.asset.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-24 text-yellow font-bold underline"
          >
            Full resume
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Resume;
