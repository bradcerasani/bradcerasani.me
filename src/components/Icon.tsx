/// <reference types="vite-plugin-svgr/client" />

import GitHubIcon from 'src/icons/github.svg?react';
import InstagramIcon from 'src/icons/instagram.svg?react';
import LinkedInIcon from 'src/icons/linkedin.svg?react';
import MuteIcon from 'src/icons/mute.svg?react';
import TwitterIcon from 'src/icons/twitter.svg?react';
import UnmuteIcon from 'src/icons/unmute.svg?react';

export type IconName = 'instagram' | 'twitter' | 'mute' | 'unmute' | 'linkedin' | 'github' | 'x';

type IconProps = {
  name: IconName;
};

export function Icon({ name }: IconProps) {
  switch (name) {
    case 'github':
      return <GitHubIcon />;
    case 'instagram':
      return <InstagramIcon />;
    case 'linkedin':
      return <LinkedInIcon />;
    case 'mute':
      return <MuteIcon />;
    case 'twitter':
      return <TwitterIcon />;
    case 'unmute':
      return <UnmuteIcon />;
    default:
      return null;
  }
}
