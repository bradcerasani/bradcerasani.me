import type { GetImageResult } from 'astro';
import type React from 'react';
import { useEffect, useMemo, useState } from 'react';
import Draggable from 'react-draggable';
import { Intrinsic } from 'src/components';
import './ChaosGallery.css';

type Image = {
  astroImage: GetImageResult;
  caption: string;
  id: string;
  isVideo: boolean;
  takenAt: number;
};

export function ChaosGallery({ images }: { images: Image[] }) {
  const [value, setValue] = useState(0);
  const [isDiscovered, setIsDiscovered] = useState(false);
  const [prefetch, setPrefetch] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const randomPositions = useMemo(
    () =>
      images.map(() => ({
        left: Math.floor(Math.random() * (70 - 30 + 1)) + 30,
        top: Math.floor(Math.random() * (60 - 40 + 1)) + 40,
      })),
    [images],
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = value > 1 ? 'hidden' : 'auto';

    const handleWheel = (event: WheelEvent) => {
      if (value > 0) {
        const friction = 4;
        const change = Math.floor(Math.abs(event.deltaY) / friction);
        setValue(value - change);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    if (value <= 0) {
      window.removeEventListener('wheel', handleWheel);
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [value]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(Number.parseInt(event.currentTarget.value));
    setIsDiscovered(true);
  }

  return (
    <>
      <input
        aria-label="Show/hide photos"
        className={`ChaosController ${isDiscovered ? 'is-discovered' : ''}`}
        max={100}
        onChange={handleChange}
        onFocus={() => setPrefetch(true)}
        onMouseOver={() => setPrefetch(true)}
        type="range"
        value={value}
      />

      {isClient && (
        <div className="ChaosGallery">
          {images.map((image, index) => {
            const position = randomPositions[index];
            const showImage = Math.round((index / images.length) * 100) < value;

            return (
              <Draggable key={image.id}>
                <div
                  className={`NewChaosImage ${showImage ? 'is-visible' : ''}`}
                  style={{
                    left: `${position.left}%`,
                    top: `${position.top}%`,
                  }}
                >
                  <Intrinsic aspectRatio={{ base: '1 / 1' }}>
                    {prefetch ? (
                      <img src={image.astroImage.src} alt={image?.caption ?? ''} />
                    ) : null}
                  </Intrinsic>
                </div>
              </Draggable>
            );
          })}
        </div>
      )}
    </>
  );
}
