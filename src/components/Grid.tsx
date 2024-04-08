import type React from 'react';
import { createResponsiveProperties } from 'src/utils';
import './Grid.css';

import type { Breakpoint } from 'src/types';

interface GridItemProps {
  width: { [key in Breakpoint]?: string };
  children: React.ReactNode;
}

interface GridProps {
  gutter: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function GridItem({ width, children }: GridItemProps) {
  const style = createResponsiveProperties('--width', width);

  return (
    <div className="Grid-item" style={style}>
      {children}
    </div>
  );
}

export function Grid({ gutter, children, style }: GridProps) {
  return (
    <div className="Grid" style={{ '--gridGutter': gutter, ...style } as React.CSSProperties}>
      {children}
    </div>
  );
}
