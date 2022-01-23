import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';

import {
  StyledGallery,
  StyledGalleryImage,
  StyledGalleryController,
} from './styles';

import instagramPosts from '../../../../content/social/instagram.json';

export const Gallery = () => {
  useEffect(() => {
    const properties = ['top', 'right', 'bottom', 'left'];

    for (let index = 0; index < instagramPosts.length; index++) {
      // TODO: Refactor to use refs
      const element = document.querySelector(`[data-image='${index}']`);
      const elementStyles = window.getComputedStyle(element);
      const minDeviation = elementStyles.getPropertyValue('--minDeviation');
      const maxDeviation = elementStyles.getPropertyValue('--maxDeviation');
      const delta = parseInt(maxDeviation) - parseInt(minDeviation);

      properties.forEach((property) => {
        const value = elementStyles.getPropertyValue(property);

        if (parseInt(value) === 0) {
          const deviation =
            Math.floor(Math.random() * delta) + parseInt(minDeviation);

          element.style[property] = `${deviation}%`;
        }
      });
    }
  });

  return (
    <StyledGallery>
      {instagramPosts.map((image, index) => {
        const caption = image?.edge_media_to_caption?.edges[0]?.node?.text;
        const tag = '@bradcerasani on Instagram';

        return (
          <Draggable key={index} onStart={(e) => e.preventDefault()}>
            <StyledGalleryImage data-image={index}>
              <img
                src={`/images/instagram/${image.id}.jpg`}
                alt={caption !== undefined ? `${caption} — ${tag}` : tag}
              />
            </StyledGalleryImage>
          </Draggable>
        );
      })}
    </StyledGallery>
  );
};

export const GalleryController = () => {
  const [isDiscovered, setIsDiscovered] = useState(false);
  const interval = Math.min(100 / instagramPosts.length);

  function handleChange(event) {
    const value = event.currentTarget.value;
    const imageIndex = Math.round(value / interval);

    const elements = document.querySelectorAll(`[data-image]`);

    elements.forEach((element, index) => {
      const isVisible = index <= imageIndex && value > 1;

      element.style.opacity = isVisible ? 1 : 0;
      element.style.pointerEvents = isVisible ? 'auto' : 'none';
    });
  }

  return (
    <StyledGalleryController
      aria-label="Show/hide photos"
      onTouchStart={() => setIsDiscovered(true)}
      onMouseDown={() => setIsDiscovered(true)}
      type="range"
      onChange={(e) => handleChange(e)}
      defaultValue="0"
      $isDiscovered={isDiscovered}
    />
  );
};
