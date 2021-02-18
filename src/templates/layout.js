import React, { useEffect } from 'react';

import lazySizes from 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';

import { Container, Footer, Header } from 'src/components';

if ('cfg' in lazySizes) {
  lazySizes.cfg.preloadAfterLoad = true;
}

function Layout({ children, ...props }) {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (!window.sessionStorage.getItem('logged')) {
      console.log(
        '%c https://bradcerasani.me/play',
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
