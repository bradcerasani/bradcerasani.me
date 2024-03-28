import { Intrinsic } from 'src/components';
import './Hero.css';

interface HeroProps {
  description: string;
  children: React.ReactNode;
}

export function Hero({ description, children }: HeroProps) {
  return (
    <div className="Hero" role="complementary" aria-label={`Hero photo: ${description}`}>
      <Intrinsic aspectRatio={{ base: '1 / 1', md: '3 / 2', lg: '16 / 9' }}>{children}</Intrinsic>
    </div>
  );
}
