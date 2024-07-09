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
        }
      }`
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
