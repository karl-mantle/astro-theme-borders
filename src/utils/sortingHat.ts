import { type CollectionEntry } from 'astro:content';

export function sortMostRecent(itemA: CollectionEntry<'posts'>, itemB: CollectionEntry<'posts'>) {
  return new Date(itemB.data.pubDate).getTime() - new Date(itemA.data.pubDate).getTime();
}