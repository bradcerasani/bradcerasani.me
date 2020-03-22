import { css } from 'styled-components';

import { color } from '../settings';

export const CASettings = css`
  --abberationOffset: 2px;
  --abberationOffsetInv: calc(var(--abberationOffset) * -1);
`;

export const CAText = css`
  ${CASettings}

  text-shadow: var(--abberationOffset) 0 var(--abberationOffset)
      ${color.red.translucent},
    var(--abberationOffsetInv) 0 var(--abberationOffset)
      ${color.cyan.translucent};
`;

export const CAFilter = css`
  ${CASettings}

  /* stylelint-disable-next-line */
  filter: drop-shadow(
      var(--abberationOffset) 0 var(--abberationOffset) ${color.red.translucent}
    )
    drop-shadow(
      var(--abberationOffsetInv) 0 var(--abberationOffset)
        ${color.cyan.translucent}
    );
`;
