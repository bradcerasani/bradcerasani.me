import { css } from 'styled-components';

export const CASettings = css`
  --offset: 2px;
  --offsetInv: calc(var(--offset) * -1);
`;

export const CAText = css`
  ${CASettings}

  text-shadow: var(--offset) 0 var(--offset)
      var(--colorRedTranslucent),
    var(--offsetInv) 0 var(--offset)
      var(--colorCyanTranslucent);
`;

export const CAFilter = css`
  ${CASettings}

  /* stylelint-disable-next-line */
  filter: drop-shadow(
      var(--offset) 0 var(--offset) var(--colorRedTranslucent)
    )
    drop-shadow(
      var(--offsetInv) 0 var(--offset)
        var(--colorCyanTranslucent)
    );
`;
