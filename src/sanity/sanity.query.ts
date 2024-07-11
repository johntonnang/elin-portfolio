import { groq } from 'next-sanity';
import { client } from './sanity.client';

const heroType = `
  _type,
  heading,
  tagline,
  image {
    "image": asset->url,
    alt,
    hotspot,
  },
  links[] {
    title,
    linkType,
    url,
    email,
    phone,
    elementId,
    pageReference-> {
      slug
    },
    icon {
      "url": asset->url
    }
  },
`;

const twoColumnTextImageType = `
  _type,
  header,
  description,
  image {
    "image": asset->url,
    alt,
    hotspot,
  }
`;

const caseWhiteBgType = `
  _type,
  wip,
  caseNumber,
  header,
  preamble,
  description,
  image {
    "image": asset->url,
    alt,
    hotspot,
  },
  categories[]-> {
    _id,
    title,
  },
`;

const caseOrangeBgType = `
  _type,
  wip,
  caseNumber,
  header,
  preamble,
  description,
  image {
    "image": asset->url,
    alt,
    hotspot,
  },
  categories[]-> {
    _id,
    title,
  },
`;

const resumeType = `
  _type,
  header,
  experience[] {
    _id,
    role,
    company,
    date,
    description
  },
  education[] {
    _id,
    school,
    degree,
    date
  },
  achievements[] {
    _id,
    achievement,
    from,
    date
  },
  resumeFile {
    asset-> {
      url
    }
  }
`;

const caseHeroType = `
  _type,
  header,
  description,
  image {
    "image": asset->url,
    alt,
    hotspot,
  },
  categories[]-> {
    _id,
    title,
  }
`;

const caseDescriptionLeftType = `
  _type,
  header,
  description,
  image {
    "image": asset->url,
    alt,
    hotspot,
  },
`;

const caseDescriptionRightType = `
  _type,
  header,
  description,
  image {
    "image": asset->url,
    alt,
    hotspot,
  },
`;

const illustrationType = `
  _type,
  description,
  image {
    "image": asset->url,
    alt,
    hotspot,
  }
`;

export async function getAllPages() {
  return await client.fetch(groq`*[_type == "page"]{ _id, title, slug }`);
}

export async function getStartPageData() {
  try {
    return await client.fetch(
      groq`*[_type == "page" && isStartPage == true][0]{
        _id,
        title,
        pageBuilder[]{
          ...,
          _type == "hero" => {
            ${heroType}
          },
          _type == "twoColumnTextImage" => {
            ${twoColumnTextImageType}
          },
          _type == "caseWhiteBg" => {
            ${caseWhiteBgType}
          },
          _type == "caseOrangeBg" => {
            ${caseOrangeBgType}
          },
          _type == "resume" => {
            ${resumeType}
          },
          _type == "caseHero" => {
            ${caseHeroType}
          },
          _type == "caseDescriptionLeft" => {
            ${caseDescriptionLeftType}
          },
          _type == "caseDescriptionRight" => {
            ${caseDescriptionRightType}
          },
          _type == "illustration" => {
            ${illustrationType}
          },
        }
      }`
    );
  } catch (error) {
    console.error('Error when fetching start page data.', error);
    return null;
  }
}

export async function getPageData(slug: string) {
  try {
    return await client.fetch(
      groq`*[_type == "page" && slug.current == $slug][0]{
        _id,
        title,
        slug,
        pageBuilder[]{
          ...,
          _type == "hero" => {
            ${heroType}
          },
          _type == "twoColumnTextImage" => {
            ${twoColumnTextImageType}
          },
          _type == "caseWhiteBg" => {
            ${caseWhiteBgType}
          },
          _type == "caseOrangeBg" => {
            ${caseOrangeBgType}
          },
          _type == "resume" => {
            ${resumeType}
          },
          _type == "caseHero" => {
            ${caseHeroType}
          },
          _type == "caseDescriptionLeft" => {
            ${caseDescriptionLeftType}
          },
          _type == "caseDescriptionRight" => {
            ${caseDescriptionRightType}
          },
          _type == "illustration" => {
            ${illustrationType}
          },
        }
      }`,
      { slug }
    );
  } catch (error) {
    console.error('Error when fetching start page data.', error);
    return null;
  }
}

const menuType = `
  _id,
  title,
  links[] {
    _key,
    title,
    linkType,
    url,
    email,
    phone,
    elementId,
    pageReference-> {
      slug
    },
    icon {
      "url": asset->url
    }
  }
`;

export async function getMenuData() {
  try {
    return await client.fetch(
      groq`*[_type == "menu"][0]{
        ${menuType}
      }`
    );
  } catch (error) {
    console.error('Error when fetching menu data.', error);
    return null;
  }
}

const footerType = `
  _id,
  title,
  links[] {
    _key,
    title,
    linkType,
    url,
    email,
    phone,
    elementId,
    pageReference-> {
      slug
    },
    icon {
      "url": asset->url
    }
  }
`;

export async function getFooterData() {
  try {
    return await client.fetch(
      groq`*[_type == "footer"][0]{
        ${footerType}
      }`
    );
  } catch (error) {
    console.error('Error when fetching footer data.', error);
    return null;
  }
}
