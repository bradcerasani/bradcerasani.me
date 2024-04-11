import type React from 'react';
import './MediaWrapper.css';

export function MediaWrapper({ children }: { children: React.ReactNode }) {
  return <div className="MediaWrapper">{children}</div>;
}
