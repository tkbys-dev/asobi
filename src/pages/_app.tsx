import '@/styles/reset.css';
import '@/styles/style.scss';
// import 'tailwindcss/tailwind.css';
import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';
import { StyleContext } from 'libs/context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>{' '}
    </>
  );
}

export default MyApp;
