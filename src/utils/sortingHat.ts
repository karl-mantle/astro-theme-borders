import { type CollectionEntry } from 'astro:content';

export function sortMostRecent(itemA: CollectionEntry<'blog'>, itemB: CollectionEntry<'blog'>) {
  return new Date(itemB.data.date).getTime() - new Date(itemA.data.date).getTime();
}