import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';

import { StyledGallery, StyledGalleryImage } from './styles';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

export const Gallery = ({ images }) => {
  useEffect(() => {
    const browserWidth =
      window.innerWidth || document.documentElement.clientWidth;
    const browserHeight =
      window.innerHeight || document.documentElement.clientHeight;

    let flip = false;

    images.forEach((image, index) => {
      const element = document.querySelector(`[data-image='${index}']`);
      const body = document.getElementById('js-mdx-body');

      const gutterWidth = (browserWidth - body.offsetWidth) / 2;
      const xMax = gutterWidth - element.offsetWidth - 20;
      const yMax = browserHeight / 2 - element.offsetHeight;
      const x = Math.floor(Math.random() * xMax);
      const y = Math.floor(Math.random() * yMax);

      if ((index + 1) % 2 === 0) {
        flip = !flip;
        element.style.left = `calc(${x}px)`;
      } else {
        element.style.right = `calc(${x}px)`;
      }

      if (flip) {
        element.style.top = `${y}px`;
      } else {
        element.style.bottom = `${y}px`;
      }

      if ((index + 1) % 5 === 0) {
        element.style.bottom = 'auto';
        element.style.top = `${browserHeight / 2 - element.offsetHeight / 2}px`;
      }
    });
  }, [images]);

  return (
    <StyledGallery>
      {images.map((image, index) => (
        <Draggable key={index}>
          <StyledGalleryImage data-image={index}>
            <img src={image.node.preview} alt="IG" />
          </StyledGalleryImage>
        </Draggable>
      ))}
    </StyledGallery>
  );
};

export const GalleryController = () => {
  function handleChange(event) {
    const value = event.currentTarget.value;
    const imageIndex = Math.floor(value / 10);
    const elements = document.querySelectorAll(`[data-image]`);

    elements.forEach((element, index) => {
      const isVisible = index <= imageIndex && value > 1;

      element.style.opacity = isVisible ? 1 : 0;
      element.style.pointerEvents = isVisible ? 'auto' : 'none';
    });
  }

  return (
    <input
      onMouseUp={(e) => {
        e.preventDefault();
        trackCustomEvent({
          category: 'Photos Slider',
          action: 'Click',
        });
      }}
      style={{ width: '100%', paddingLeft: '0', paddingRight: '0' }}
      type="range"
      onChange={(e) => handleChange(e)}
      defaultValue="0"
    />
  );
};
