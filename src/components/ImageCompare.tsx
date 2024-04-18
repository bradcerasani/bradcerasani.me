import { ReactCompareSlider } from 'react-compare-slider';
import { Caption, Figure, Intrinsic } from 'src/components';
import { useSessionStorage } from 'src/hooks';
import type { AstroImage } from 'src/types';
import './ImageCompare.css';

export function ImageCompare({
  caption,
  itemOne,
  itemTwo,
  position,
  size,
  name,
}: {
  name: string;
  caption?: string;
  itemOne: AstroImage;
  itemTwo: AstroImage;
  position: number;
  size: 'default' | 'large' | 'full';
}) {
  const [isDiscovered, setIsDiscovered] = useSessionStorage(
    `isDiscovered:ImageCompare-${name}`,
    false,
  );

  const handlePositionChange = (newPosition: number) => {
    if (isDiscovered) return;

    if (Math.round(newPosition) !== position) {
      setIsDiscovered(true);
    }
  };

  return (
    <Figure size={size}>
      <Intrinsic aspectRatio={{ base: '3 / 2' }}>
        <div>
          <ReactCompareSlider
            handle={<div className={`Handle ${!isDiscovered ? 'Handle--isUndiscovered' : ''}`} />}
            itemOne={<img src={itemOne.src} alt={caption} decoding="async" />}
            itemTwo={<img src={itemTwo.src} alt={caption} decoding="async" />}
            position={position}
            onPositionChange={handlePositionChange}
          />
        </div>
      </Intrinsic>
      {caption && <Caption>{caption}</Caption>}
    </Figure>
  );
}
