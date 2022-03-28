import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';

export default function Layout({ children }: any) {
  const router = useRouter();

  return (
    <>
      <Header />
      {children}
      {(() => {
        if (router.pathname !== '/') {
          return <Footer />;
        }
      })()}
    </>
  );
}
