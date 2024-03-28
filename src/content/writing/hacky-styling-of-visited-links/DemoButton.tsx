import type React from 'react';
import './DemoButton.css';

interface DemoButtonProps {
  step: number;
  children: React.ReactNode;
  rest: React.HTMLAttributes<HTMLAnchorElement>;
}

function DemoButton({ step, children, ...rest }: DemoButtonProps): JSX.Element {
  let className = 'DemoButton';

  if (step >= 2) {
    className += ' step2';
  }
  if (step >= 3) {
    className += ' step3';
  }

  return (
    <a className={className} {...rest}>
      {children}
    </a>
  );
}

export { DemoButton };
