import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import { createContext, useContext } from 'react';
import { WebSocketProvider } from '../components/WebSocketProvider';

function MyApp({ Component, pageProps }) {

  return (
    <WebSocketProvider>
      <Component {...pageProps} />
    </WebSocketProvider>
  );
}

export default MyApp;
