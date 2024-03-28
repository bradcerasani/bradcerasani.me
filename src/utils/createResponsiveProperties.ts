import { BREAKPOINTS } from 'src/constants';
import type { Breakpoint } from 'src/types';

export const createResponsiveProperties = (
  property: string,
  width: { [key in Breakpoint]?: string }
) => {
  const style = Object.keys(width).reduce((acc, cur) => {
    const key = cur as Breakpoint;
    if (BREAKPOINTS[key]) {
      (acc as any)[`${property}-${cur}`] = `calc(${width[cur as Breakpoint]!})`;
    }
    return acc;
  }, {} as React.CSSProperties);

  return style;
};
