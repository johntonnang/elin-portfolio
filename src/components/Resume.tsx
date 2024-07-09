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
      <div className="mx-auto flex h-screen w-screen max-w-[1440px] justify-between px-[137px] pb-[168px] pt-[185px]">
        <div className="flex h-full w-[530px] flex-col justify-between">
          <div>
            <h2 className="text-24 text-yellow mb-4 font-bold">Experience</h2>
            <ul className="flex flex-col gap-10">
              {experience.map((exp, index) => (
                <li key={exp._id}>
                  <h4 className="text-32 flex items-center gap-4 font-bold">
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
                  </h4>
                  <p className="text-16 mb-4 font-medium uppercase tracking-widest">
                    {exp.date}
                  </p>
                  <p className="text-14 font-medium">{exp.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
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
        <div className="flex h-full w-96 flex-col justify-end">
          <h3 className="text-24 text-yellow mb-4 font-bold">Education</h3>
          <ul>
            {education.map((edu, index) => (
              <li key={edu._id} className="mb-10">
                <h4 className="text-32 flex items-center gap-4 font-bold">
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
                </h4>
                <p className="text-16 font-medium uppercase tracking-widest">
                  {edu.date}
                </p>
              </li>
            ))}
          </ul>
          <h3 className="text-24 text-yellow mb-4 font-bold">Achievements</h3>
          <ul>
            {achievements.map((ach) => (
              <li key={ach._id}>
                <h4 className="text-32 flex items-center gap-4 font-bold">
                  {ach.achievement}{' '}
                  <SquareIcon className="text-yellow" width={16} height={16} />{' '}
                </h4>
                <p className="text-32 font-bold">{ach.from}</p>
                <p className="text-16 font-medium uppercase tracking-widest">
                  {ach.date}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
