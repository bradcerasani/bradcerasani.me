import type React from 'react';
import type { Breakpoint } from 'src/types';
import { createResponsiveProperties } from 'src/utils';
import './Intrinsic.css';

interface IntrinsicProps {
  aspectRatio: { [key in Breakpoint]?: string };
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function Intrinsic({ aspectRatio, children, style }: IntrinsicProps) {
  const responsiveProperties = createResponsiveProperties('--ratio', aspectRatio);

  return (
    <div className="Intrinsic" style={{ ...style, ...responsiveProperties }}>
      {children}
    </div>
  );
}
