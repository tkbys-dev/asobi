import { useRouter } from 'next/router';
import Header from '@/components/header';
import Footer from '@/components/footer';

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
