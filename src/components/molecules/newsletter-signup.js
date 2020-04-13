import React from 'react';
import styled from 'styled-components';

import { color } from '../theme';

const StyledForm = styled.form`
  margin-bottom: 3rem;

  /* These are probably one-off styles so they can live here for now... 🤙 */

  input {
    --size: 36px;

    appearance: none;
    background-color: transparent;
    border: none;
    display: block;
    font-size: 0.75rem;
    height: var(--size);
    line-height: var(--size);
    margin-left: 0.5rem;
    margin-top: -1px; /* align to baseline */
    outline: none;
    padding: 0;
  }

  input[type='text'] {
    background-color: ${color.white};
    border: 1px solid black;
    color: inherit;
    flex-grow: 1;
    flex-shrink: 0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    &::placeholder {
      color: inherit;
      font-style: italic;
    }
  }

  input[type='submit'] {
    background-image: url('/images/icons/mail.png');
    background-position: center 50%;
    background-repeat: no-repeat;
    background-size: 32px; /* fixed size for pixel sharpness */
    cursor: pointer;
    -webkit-text-fill-color: transparent;
    width: var(--size);
  }
`;

export const NewsletterSignup = ({ ...props }) => {
  return (
    <StyledForm
      {...props}
      action="https://tinyletter.com/bradcerasani"
      method="post"
      target="popupwindow"
      onSubmit={() => {
        window.open(
          'https://tinyletter.com/bradcerasani',
          'popupwindow',
          'scrollbars=yes,width=800,height=600'
        );
        return true;
      }}
    >
      <input type="hidden" value="1" name="embed" />

      <p>Infrequent writing about design, technology, and making things.</p>

      <p
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          marginTop: '-0.75rem',
        }}
      >
        <span>
          Stay in the loop via <a href="/rss.xml">RSS</a> or email:
        </span>

        <input
          type="text"
          name="email"
          id="tlemail"
          placeholder="username@hostname.domain"
        />

        <input type="submit" value="Submit" />
      </p>
    </StyledForm>
  );
};
