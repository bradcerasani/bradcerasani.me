import { BREAKPOINTS } from 'src/constants';
import type { Breakpoint } from 'src/types';

export const createResponsiveProperties = (
  property: string,
  width: { [key in Breakpoint]?: string },
) => {
  const style = Object.keys(width).reduce(
    (acc, cur) => {
      const key = cur as Breakpoint;

      if (BREAKPOINTS[key]) {
        acc[`${property}-${cur}`] = `calc(${width[key] ?? '0'})`;
      }

      return acc;
    },
    {} as Record<string, string>,
  );
  return style;
};
