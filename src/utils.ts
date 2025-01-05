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
