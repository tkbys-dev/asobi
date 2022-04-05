import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';

export default function Layout({ children }: any) {
  const router = useRouter();

  return (
    <>
      <div className="wrapper">
        {(() => {
          if (
            router.pathname !== '/p5/dots' &&
            router.pathname !== '/p5/lines' &&
            router.pathname !== '/p5/circles'
          ) {
            return <Header />;
          }
        })()}
        {children}
        {(() => {
          if (
            router.pathname !== '/' &&
            router.pathname !== '/p5/dots' &&
            router.pathname !== '/p5/lines' &&
            router.pathname !== '/p5/circles'
          ) {
            return <Footer />;
          }
        })()}
      </div>
    </>
  );
}
