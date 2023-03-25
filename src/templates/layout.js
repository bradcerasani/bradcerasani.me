import React from 'react';
import lazySizes from 'lazysizes';

import { Container, Footer } from 'src/components';

if (typeof window !== 'undefined') {
  require('lazysizes/plugins/unveilhooks/ls.unveilhooks');
  lazySizes.cfg.preloadAfterLoad = true;
}

function Layout({ children }) {
  return (
    <>
      <Container>{children}</Container>
      <Footer />
    </>
  );
}

export default Layout;
