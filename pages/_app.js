import { useEffect } from 'react';

import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

import 'src/css/modern-normalize.css';
import 'src/css/_settings.css';
import 'src/css/animations.css';
import 'src/css/elements.css';
import 'src/css/fonts.css';
import 'src/css/footnotes.css';
import 'src/css/prism-theme.css';

function App({ Component, pageProps }) {
  useEffect(() => {
    if (!window.sessionStorage.getItem('logged')) {
      console.log(
        '%c https://bradcerasani.me/play',
        'color: white; background-color: hsl(0, 0%, 10%); padding: 1rem;'
      );
      sessionStorage.setItem('logged', true);
    }
  }),
    [];

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KQNCYGFSDH"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-KQNCYGFSDH');
        `}
      </Script>
    </>
  );
}

export default App;
