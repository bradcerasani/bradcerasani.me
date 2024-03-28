import { defineCollection, z } from 'astro:content';

const schema = z.object({
  cta: z.string().optional(),
  date: z.date(),
  dateRange: z.string().optional(),
  description: z.string(),
  image: z.string().optional(),
  skipHero: z.boolean().optional(),
  status: z.string(),
  title: z.string(),
  video: z.string().optional(),
});

const writingCollection = defineCollection({
  type: 'content',
  schema,
});

const projectsCollection = defineCollection({
  type: 'content',
  schema,
});

export const collections = {
  writing: writingCollection,
  projects: projectsCollection,
};
