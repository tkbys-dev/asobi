import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';

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
