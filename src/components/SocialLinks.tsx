import './SocialLinks.css';

import { linkList } from 'src/content/social/linkList';

export function SocialLinks() {
  return (
    <ul className="SocialLinks">
      {linkList.map(({ title, url }) => (
        <li key={title}>
          <a href={url} rel="noopener noreferrer" target="_blank">
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
}
