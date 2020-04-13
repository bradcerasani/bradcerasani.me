import React from 'react';
import styled from 'styled-components';

import { breakpoint, color } from '../theme';

/* These are probably one-off styles so they can live here for now... 🤙 */

const StyledForm = styled.form`
  margin-bottom: 2rem;

  input {
    --size: 32px;

    appearance: none;
    background-color: transparent;
    border: none;
    border-radius: 0;
    display: block;
    font-size: 0.75rem;
    height: var(--size);
    line-height: 1.25;
    margin-top: 0.25rem;
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
    margin-left: 0.5rem;
    -webkit-text-fill-color: transparent;
    width: var(--size);
  }

  @media (min-width: ${breakpoint.md}) {
    margin-bottom: 3rem;

    input {
      margin-top: 0;
    }

    input[type='text'] {
      margin-left: 0.5rem;
    }
  }
`;

const FormRow = styled.p`
  display: flex;
  flex-wrap: wrap;

  span {
    margin-bottom: 0.5rem;
  }

  @media (min-width: ${breakpoint.md}) {
    flex-wrap: nowrap;
    margin-top: -1rem;

    span {
      margin-bottom: 0;
    }
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

      {/* Widow killer... */}
      <p style={{ letterSpacing: '-0.01em' }}>
        Infrequent writing about design, technology, and making things.
      </p>

      <FormRow>
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
      </FormRow>
    </StyledForm>
  );
};
