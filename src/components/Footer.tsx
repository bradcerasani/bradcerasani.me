import { useState } from 'react';

import { Container, Icon } from 'src/components';
import type { IconName } from 'src/components/Icon';
import { linkList } from 'src/content/social/linkList';
import './Footer.css';

export function Footer() {
  const [showContact, setShowContact] = useState(false);

  return (
    <footer className="Footer">
      <Container>
        <div>
          <button
            type="button"
            onClick={() => setShowContact(true)}
            style={{ cursor: showContact ? 'auto' : 'pointer' }}
          >
            Contact
          </button>
          {showContact && (
            <div className="ChatBubble">
              <a href="mailto:bradcerasani@gmail.com">bradcerasani@gmail.com</a>
            </div>
          )}
        </div>

        <div className="Footer-linkList">
          {linkList.map((link) => (
            <a href={link.url} target="_blank" rel="noreferrer noopener">
              <Icon name={link.title.toLowerCase() as IconName} />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
