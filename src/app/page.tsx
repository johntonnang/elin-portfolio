import { FC } from 'react';
import { getStartPageData } from '../sanity/sanity.query';
import Hero from '~components/Hero';
import CaseWhiteBg from '~components/CaseWhiteBg';
import CaseOrangeBg from '~components/CaseOrangeBg';
import Resume from '~components/Resume';
import TwoColumnTextImage from '~components/TwoColumnTextImage';
import CaseHero from '~components/CaseHero';
import CaseDescriptionLeft from '~components/CaseDescriptionLeft';
import CaseDescriptionRight from '~components/CaseDescriptionRight';
import Illustration from '~components/Illustration';

import { ComponentProps, ComponentMap, PageData } from '~types/index';

const componentMap: ComponentMap = {
  hero: Hero as FC<ComponentProps>,
  caseWhiteBg: CaseWhiteBg as FC<ComponentProps>,
  caseOrangeBg: CaseOrangeBg as FC<ComponentProps>,
  resume: Resume as FC<ComponentProps>,
  twoColumnTextImage: TwoColumnTextImage as FC<ComponentProps>,
  caseHero: CaseHero as FC<ComponentProps>,
  caseDescriptionLeft: CaseDescriptionLeft as FC<ComponentProps>,
  caseDescriptionRight: CaseDescriptionRight as FC<ComponentProps>,
  illustration: Illustration as FC<ComponentProps>,
};

export default async function Home() {
  const pageData: PageData = await getStartPageData();

  return (
    <main>
      {pageData.pageBuilder?.map((block, index) => {
        const Component = componentMap[block._type];
        return Component ? <Component key={index} {...block} /> : null;
      })}
    </main>
  );
}
