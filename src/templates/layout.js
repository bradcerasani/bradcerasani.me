import React, { useState } from 'react';
import { MDXProvider } from '@mdx-js/react';

import 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';

import {
  Annot,
  Container,
  Figure,
  Footer,
  Grid,
  GridItem,
  Header,
  Image,
  ImageCompare,
  Img,
  Note,
  Video,
  PostVideo,
  Vimeo,
} from 'src/components';

const components = {
  Annot,
  Figure,
  Grid,
  GridItem,
  ImageCompare,
  Img,
  Note,
  PostImage: Image, // Image appears to be a reserved word
  PostVideo,
  Video,
  Vimeo,
};

function Layout({ children, ...props }) {
  const [showLog, setShowLog] = useState(true);

  if (showLog) {
    console.log(
      '%c Would you like to play a game?  https://bradcerasani.me/play',
      'color: white; background-color: hsl(0, 0%, 10%); padding: 1rem;'
    );
    setShowLog(false);
  }

  return (
    <>
      <Container>
        <Header {...props} />
        <MDXProvider components={components}>{children}</MDXProvider>
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
