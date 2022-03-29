import Head from 'next/head';
import type { AppProps } from 'next/app';
import { CssBaseline, NoSsr } from '@mui/material';
import { ContextApiProviders } from '../context/globalContext';
import { ThemeProvider } from '../components/common/themeProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NoSsr>
      <ContextApiProviders>
        <Head>
          <title>Odonto</title>
        </Head>
        <ThemeProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ContextApiProviders>
    </NoSsr>
  );
}

export default MyApp;
