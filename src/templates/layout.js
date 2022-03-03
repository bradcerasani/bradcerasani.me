import React from 'react';

import { Container, Footer, Header } from 'src/components';

if (process.browser) {
  require('lazysizes/plugins/unveilhooks/ls.unveilhooks');
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
