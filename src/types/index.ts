import { PortableTextBlock } from 'next-sanity';
import { FC } from 'react';

export interface BaseProps {
  _type: string;
}

export interface LinkType {
  title: string;
  linkType: 'internal' | 'external' | 'email' | 'phone';
  url?: string;
  email?: string;
  phone?: string;
  elementId?: {
    current: string;
  };
  pageReference?: { slug: { current: string } };
  icon?: { url: string };
}

export interface HeroProps extends BaseProps {
  _type: 'hero';
  heading: string;
  tagline: string;
  image: {
    image: string;
    alt: string;
  };
  links: LinkType[];
}

export interface CaseProps extends BaseProps {
  _type: 'caseWhiteBg' | 'caseOrangeBg';
  wip: boolean;
  caseNumber: string;
  header: string;
  preamble: string;
  description: string;
  image: {
    image: string;
    alt: string;
  };
  categories: {
    _id: string;
    title: string;
  }[];
}

export interface ResumeProps extends BaseProps {
  _type: 'resume';
  header: string;
  experience: {
    _id: string;
    role: string;
    company: string;
    date: string;
    description: string;
  }[];
  education: {
    _id: string;
    school: string;
    degree: string;
    date: string;
  }[];
  achievements: {
    _id: string;
    achievement: string;
    from: string;
    date: string;
  }[];
  resumeFile: {
    asset: {
      url: string;
    };
  };
}

export interface MenuProps extends BaseProps {
  _id: string;
  title: string;
  links: LinkType[];
}

export interface FooterProps extends BaseProps {
  _id: string;
  title: string;
  links: LinkType[];
}

export interface TwoColumnTextImageProps extends BaseProps {
  _type: 'twoColumnTextImage';
  header: string;
  description: PortableTextBlock[];
  image: {
    image: string;
    alt: string;
  };
}

export interface CaseDescription extends BaseProps {
  _type: 'caseDescriptionLeft' | 'caseDescriptionRight';
  header: string;
  description: PortableTextBlock[];
  image: {
    image: string;
    alt: string;
  };
}

export interface IllustrationProps extends BaseProps {
  _type: 'illustration';
  description: string;
  image: {
    image: string;
    alt: string;
  };
}

export type ComponentProps =
  | HeroProps
  | CaseProps
  | ResumeProps
  | TwoColumnTextImageProps
  | CaseDescription
  | IllustrationProps;

export type ComponentMap = {
  [key: string]: FC<ComponentProps>;
};

export type PageData = {
  _id: string;
  title: string;
  pageBuilder: ComponentProps[];
};

export type PageProps = {
  slug?: {
    current: string;
  };
};

export type ParamsProps = {
  params: {
    slug: string;
  };
};
