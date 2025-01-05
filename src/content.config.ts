import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { slugify } from './utils';

const seoSchema = z.object({
  title: z.string().min(5).max(120).optional(),
  description: z.string().min(15).max(160).optional(),
  ogImage: z
    .object({
      src: z.string(),
      alt: z.string().optional()
    })
    .optional(),
  pageType: z.enum(['website', 'article']).default('website')
});

const customPosts = defineCollection({
  loader: glob({ base: './src/content/customPosts', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z
      .object({
        src: image(),
        alt: z.string().optional()
      })
      .optional(),
    draft: z.boolean().default(false),
    category: z.string().optional().default('Uncategorised'),
    tags: z.array(z.string()).default([]),
    seo: seoSchema.optional()
  }),
});

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    slug: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z
      .object({
        src: image(),
        alt: z.string().optional()
      })
      .optional(),
    draft: z.boolean().default(false),
    category: z.string().optional().default('Uncategorised'),
    tags: z.array(z.string()).default([]),
    seo: seoSchema.optional()
  }).refine((data) => {
    if (!data.slug) {
      data.slug = slugify(data.title)
    }
    return true;
  }),
});

export const collections = { posts, customPosts };
