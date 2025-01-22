import { type DataEntryMap, getCollection } from 'astro:content';
import type { Terms } from './types';

export const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
};

export const getCategories = async (entryType: keyof DataEntryMap): Promise<Terms[]> => {
  const entries = await getCollection(entryType);
  const categories = new Set(
    entries
      .filter((entry) => !entry.data.draft)
      .map((entry) => entry.data.category)
  );

  const categoriesArray = Array.from(categories).map((category) => ({
    name: category,
    slug: slugify(category),
    type: 'category'
  }));

  return categoriesArray.sort((a, b) => a.name.localeCompare(b.name));
};

export const getTags = async (entryType: keyof DataEntryMap): Promise<Terms[]> => {
  const entries = await getCollection(entryType);
  const tags = new Set(
    entries
      .filter((entry) => !entry.data.draft)
      .flatMap((entry) => entry.data.tags)
  );

  const tagsArray = Array.from(tags).map((tag) => ({
    name: tag,
    slug: slugify(tag),
    type: 'tag'
  }));

  return tagsArray.sort((a, b) => a.name.localeCompare(b.name));
};

export const getTerms = async (entryType: keyof DataEntryMap): Promise<Terms[]> => {
  const categories = await getCategories(entryType);
  const tags = await getTags(entryType);
  const termsArray = categories.concat(tags);

  return termsArray.sort((a, b) => a.name.localeCompare(b.name));
};

export const getEntries = async (entryType: keyof DataEntryMap, max?: number) => {
  return (await getCollection(entryType))
    .filter((entry) => !entry.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(0, max)
};

export const getEntriesByCategory = async (entryType: keyof DataEntryMap, category: string, max?: number) => {
  return (await getCollection(entryType))
    .filter((entry) => !entry.data.draft)
    .filter((entry) => entry.data.category.includes(category))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(0, max)
};

export const getEntriesByTag = async (entryType: keyof DataEntryMap, tag: string, max?: number) => {
  return (await getCollection(entryType))
    .filter((entry) => !entry.data.draft)
    .filter((entry) => entry.data.tags.includes(tag))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(0, max)
};

export const resolveBackgroundColor = (backgroundColor?: string) => {
  let backgroundColorCSS;
  switch (backgroundColor) {
    case 'transparent':
      backgroundColorCSS = 'bg-transparent dark:bg-transparent';
      break;
    case 'white':
      backgroundColorCSS = 'bg-white dark:bg-black';
      break;
    case 'light-grey':
      backgroundColorCSS = 'bg-light-grey dark:bg-dark-grey';
      break;
    case 'transparent-dark':
      backgroundColorCSS = 'bg-transparent dark:bg-transparent';
      break;
    case 'black':
      backgroundColorCSS = 'bg-black dark:bg-white';
      break;
    case 'dark-grey':
      backgroundColorCSS = 'bg-dark-grey dark:bg-light-grey';
      break;
    default:
      break;
  }
  return backgroundColorCSS;
};

export const resolveTextColor = (backgroundColor?: string) => {
  const blackText = 'text-black dark:text-white';
  const whiteText = 'text-white dark:text-black';

  let textColor;
  switch (backgroundColor) {
    case 'transparent-dark':
      textColor = whiteText;
      break;
    case 'black':
      textColor = whiteText;
      break;
    case 'dark-grey':
      textColor = whiteText;
      break;
    default:
      textColor = blackText;
      break;
  }
  return textColor;
};

export const resolveLinkColor = (backgroundColor?: string) => {
  const blackText = 'text-black dark:text-white group-hover/card:text-true-black dark:group-hover/card:text-true-white group-hover/card:decoration-true-black dark:group-hover/card:decoration-true-white';
  const whiteText = 'text-white dark:text-black group-hover/card:text-true-white dark:group-hover/card:text-true-black group-hover/card:decoration-true-white dark:group-hover/card:decoration-true-black';

  let linkColor;
  switch (backgroundColor) {
    case 'transparent-dark':
      linkColor = whiteText;
      break;
    case 'black':
      linkColor = whiteText;
      break;
    case 'dark-grey':
      linkColor = whiteText;
      break;
    default:
      linkColor = blackText;
      break;
  }
  return linkColor;
};
