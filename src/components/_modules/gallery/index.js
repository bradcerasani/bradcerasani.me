import React, { useEffect } from 'react';
import Draggable from 'react-draggable';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

import {
  StyledGallery,
  StyledGalleryImage,
  StyledGalleryController,
} from './styles';

export const Gallery = ({ images }) => {
  useEffect(() => {
    const properties = ['top', 'right', 'bottom', 'left'];

    for (let index = 0; index < images.length; index++) {
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
  }, [images]);

  return (
    <StyledGallery>
      {images.map((image, index) => (
        <Draggable key={index} onStart={(e) => e.preventDefault()}>
          <StyledGalleryImage data-image={index}>
            <img
              src={image.node.preview}
              alt={image.node.caption || '@bradcerasani on Instagram'}
            />
          </StyledGalleryImage>
        </Draggable>
      ))}
    </StyledGallery>
  );
};

export const GalleryController = ({ images }) => {
  function handleChange(event) {
    const value = event.currentTarget.value;
    const imageIndex = Math.floor(value / images.length);
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
      onMouseUp={() => {
        trackCustomEvent({
          category: 'Interactive Elements',
          label: 'Photos Slider',
          action: 'Click',
        });
      }}
      type="range"
      onChange={(e) => handleChange(e)}
      defaultValue="0"
    />
  );
};
