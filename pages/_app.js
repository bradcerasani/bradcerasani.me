import { useEffect } from 'react';

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

  return <Component {...pageProps} />;
}

export default App;
