import { useEffect, useState } from 'react';
import Draggable from 'react-draggable';

import './ChaosGallery.css';

import instagramPosts from 'src/content/social/instagram.json';

export function ChaosGallery() {
  const [prefetch, setPrefetch] = useState(false);
  const interval = Math.min(100 / instagramPosts.length);

  useEffect(() => {
    const properties = ['top', 'right', 'bottom', 'left'];

    for (let index = 0; index < instagramPosts.length; index++) {
      const element = document.querySelector(`[data-image='${index}']`) as HTMLElement;
      const elementStyles = window.getComputedStyle(element);
      const minDeviation = elementStyles.getPropertyValue('--minDeviation');
      const maxDeviation = elementStyles.getPropertyValue('--maxDeviation');
      const delta = Number.parseInt(maxDeviation) - Number.parseInt(minDeviation);

      for (const property of properties) {
        const value = elementStyles.getPropertyValue(property);

        if (Number.parseInt(value) === 0) {
          const deviation = Math.floor(Math.random() * delta) + Number.parseInt(minDeviation);

          element.style.setProperty(property, `${deviation}%`);
        }
      }
    }
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    const imageIndex = Math.round(Number.parseInt(value) / interval);
    const classList = event.target.classList;

    if (Number.parseInt(value) > 1) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    setPrefetch(true);

    if (!classList.contains('is-discovered')) classList.add('is-discovered');

    const elements = document.querySelectorAll('[data-image]');

    elements.forEach((element, index) => {
      const isVisible = index <= imageIndex && Number.parseInt(value) > 1;

      (element as HTMLElement).style.opacity = isVisible ? '1' : '0';
      (element as HTMLElement).style.pointerEvents = isVisible ? 'auto' : 'none';
    });
  }

  return (
    <>
      <input
        className="ChaosController"
        aria-label="Show/hide photos"
        type="range"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        defaultValue="0"
        onMouseOver={() => setPrefetch(true)}
        onFocus={() => setPrefetch(true)}
      />

      <div className="ChaosGallery">
        {instagramPosts.map((image, index) => {
          const caption = image?.edge_media_to_caption?.edges[0]?.node?.text;
          const tag = '@bradcerasani on Instagram';

          return (
            <Draggable key={image.id} onStart={(e) => e.preventDefault()}>
              <div className="ChaosImage" data-image={index}>
                {prefetch && (
                  <img
                    src={`/images/instagram/${image.id}.jpg`}
                    alt={caption !== undefined ? `${caption} — ${tag}` : tag}
                    loading="lazy"
                  />
                )}
              </div>
            </Draggable>
          );
        })}
      </div>
    </>
  );
}
