import './Figure.css';

interface FigureProps {
  size?: 'default' | 'large' | 'full';
  children?: React.ReactNode;
}

export function Figure({ size = 'default', children }: FigureProps) {
  let className = 'Figure';
  if (size === 'full') {
    className += ' Figure--full';
  } else if (size === 'large') {
    className += ' Figure--large';
  }

  return <figure className={className}>{children}</figure>;
}
