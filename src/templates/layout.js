import React, { useEffect } from 'react';
import lazySizes from 'lazysizes';

import { Container, Footer, Header } from 'src/components';

if ('cfg' in lazySizes) {
  lazySizes.cfg.init = false;
}

function Layout({ children, ...props }) {
  useEffect(() => {
    require('lazysizes/plugins/unveilhooks/ls.unveilhooks.min');

    lazySizes.init();

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
