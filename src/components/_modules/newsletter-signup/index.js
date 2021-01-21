import React from 'react';
import styled from 'styled-components';

import { breakpoint } from 'src/settings';

/* These are probably one-off styles so they can live here for now... 🤙 */

const StyledForm = styled.form`
  margin-bottom: 2rem;

  input {
    --size: 36px;

    appearance: none;
    background-color: transparent;
    border: none;
    border-radius: 0;
    display: block;
    font-size: var(--fontSizeSmall);
    height: var(--size);
    line-height: 1.25;
    margin-top: 0.25rem;
    outline: none;
    padding: 0;
  }

  input[type='text'] {
    background-color: white;
    border: 1px solid var(--colorGreyDarker);
    color: inherit;
    flex-grow: 1;
    flex-shrink: 0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    transition: background-color, border-color, color var(--transitionDefault);

    /* Default state */
    &:not(:valid) {
      background-color: var(--colorGreyLightest);
      border: 1px solid transparent;
    }

    &::placeholder {
      color: var(--colorGreyDark);
      font-style: italic;
      transition: color var(--transitionDefault);
    }

    /* stylelint-disable */
    &:focus,
    &:active {
      background-color: white !important;
      border-color: var(--colorGreyDarker) !important;

      &::placeholder {
        color: inherit;
      }
    }
    /* stylelint-enable */

    /* Remove blue autocompelte background in webkit */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      border-color: var(--colorGreyDarker);
      box-shadow: 0 0 0px 2rem white inset !important;
    }
  }

  input[type='submit'] {
    background-image: url('/images/icons/mail-36@2x.png');
    background-position: center 50%;
    background-repeat: no-repeat;
    background-size: 36px;
    cursor: pointer;
    margin-left: 0.75rem;
    -webkit-text-fill-color: transparent;
    text-indent: -10000px;
    width: var(--size);
  }

  @media (min-width: ${breakpoint.md}) {
    margin-bottom: 3rem;

    input {
      margin-top: -2px;
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
          id="tlemail"
          name="email"
          placeholder="username@hostname.domain"
          required
          type="text"
        />

        <input type="submit" value="Submit" />
      </FormRow>
    </StyledForm>
  );
};
