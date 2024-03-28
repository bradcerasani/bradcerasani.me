import type { InferEntrySchema } from 'astro:content';
import type { BREAKPOINTS } from './constants';

// Extract the keys of `breakpoints` to dynamically create the Breakpoint type
export type Breakpoint = keyof typeof BREAKPOINTS;

export type EntryEssential = {
  collection: 'projects' | 'writing';
  data: InferEntrySchema<'projects' | 'writing'>;
  id: string;
  slug: string;
};

export type AstroImage = {
  alt: string;
  decoding: 'async' | 'lazy' | 'sync';
  format: 'webp' | 'jpeg' | 'png' | 'avif';
  height: number;
  src: string;
  width: number;
};
