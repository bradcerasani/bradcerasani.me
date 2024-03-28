import Player from '@vimeo/player';
import { useEffect, useState } from 'react';
import { Caption, Figure, Intrinsic } from 'src/components';
import './Vimeo.css';

type Commentary = {
  time: number;
  value: string;
};

interface VimeoProps {
  vimeoId: number;
  caption: string;
  size: 'default' | 'large' | 'full';
  commentary?: Commentary[];
  color?: string;
}

export function Vimeo({ vimeoId, caption, size, commentary, color = '#f1f1ee' }: VimeoProps) {
  const [captionText, setCaptionText] = useState(caption);
  const targetElementId = `js-${vimeoId}`;

  useEffect(() => {
    const embedOptions = {
      byline: false,
      id: vimeoId,
      portrait: false,
      title: false,
    };

    const player = new Player(targetElementId, embedOptions);

    player.setColor(color);

    // Set up video commentary
    if (commentary && commentary.length) {
      commentary?.forEach(({ time, value }) => {
        player.addCuePoint(time, { value }).catch((error: any) => console.error(error));
      });
    }

    // Set up event listeners
    player.on('cuepoint', ({ data }: { data: { value: string } }) => setCaptionText(data.value));

    return () => {
      player.destroy();
    };
  }, [targetElementId, vimeoId, commentary, color, setCaptionText]);

  return (
    <div className="Vimeo">
      <Figure size={size}>
        <Intrinsic
          aspectRatio={{ base: '16 / 9' }}
          style={{ backgroundColor: 'var(--colorBlack)' }}
        >
          <div id={targetElementId} className="Vimeo-player" />
        </Intrinsic>
        <Caption htmlContent={captionText || '&nbsp;'} />
      </Figure>
    </div>
  );
}
