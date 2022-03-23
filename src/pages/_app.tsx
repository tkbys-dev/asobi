import '@/styles/reset.css';
import '@/styles/base.scss';
import '@/styles/style.scss';
// import 'tailwindcss/tailwind.css';
import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </AnimatePresence>
  );
}

export default MyApp;
