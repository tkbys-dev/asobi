import '@/styles/reset.css';
import '@/styles/base.scss';
import 'tailwindcss/tailwind.css';
import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
