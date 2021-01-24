import React, { useEffect } from 'react';

import 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';

lazySizes.cfg.preloadAfterLoad = true;

import { Container, Footer, Header } from 'src/components';

function Layout({ children, ...props }) {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (!window.sessionStorage.getItem('logged')) {
      console.log(
        '%c Would you like to play a game?  https://bradcerasani.me/play',
        'color: white; background-color: hsl(0, 0%, 10%); padding: 1rem;'
      );
      sessionStorage.setItem('logged', true);
    }
  });

  return (
    <>
      <Container>
        <Header {...props} />
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
