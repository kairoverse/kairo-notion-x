import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import '@kairoverse/notion-x/css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to notion-x!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
