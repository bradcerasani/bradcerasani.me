import { BREAKPOINTS } from './constants';

// Extract the keys of `breakpoints` to dynamically create the Breakpoint type
export type Breakpoint = keyof typeof BREAKPOINTS;
