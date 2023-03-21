import React from 'react';
import lazySizes from 'lazysizes';

import { Container, Footer, Header } from 'src/components';

if (typeof window !== 'undefined') {
  require('lazysizes/plugins/unveilhooks/ls.unveilhooks');
  lazySizes.cfg.preloadAfterLoad = true;
}

function Layout({ children, ...props }) {
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
