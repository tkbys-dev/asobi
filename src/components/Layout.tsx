import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout({ children }: any) {
  const router = useRouter();

  return (
    <>
      {/* <Header /> */}
      <header className="header">
        <Link href="/">
          <a>
            <img
              src="/assets/img/common/header-logo.svg"
              className="header_logo"
              width="132"
              height="49"
              alt="test. inc"
            />
          </a>
        </Link>
        <nav className="header_nav">
          <ul className="header_nav_list">
            <li className="header_nav_list_item">
              <Link href="/works">
                <a>Works</a>
              </Link>
            </li>
            <li className="header_nav_list_item">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className="header_nav_list_item">
              <Link href="/members">
                <a>Members</a>
              </Link>
            </li>
            <li className="header_nav_list_item">
              <Link href="/careers">
                <a>Careers</a>
              </Link>
            </li>
            <li className="header_nav_list_item">
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
      {(() => {
        if (router.pathname !== '/') {
          return (
            // <Footer />
            <footer className="footer">
              <Link href="/">
                <a className="footer_link">
                  <img
                    src="/assets/img/common/footer-logo.svg"
                    className="footer_logo"
                    width="132"
                    height="49"
                    alt="test. inc"
                  />
                </a>
              </Link>
              <nav className="footer_nav">
                <ul className="footer_nav_list">
                  <li className="footer_nav_list_item">
                    <Link href="/works">
                      <a>Works</a>
                    </Link>
                  </li>
                  <li className="footer_nav_list_item">
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li className="footer_nav_list_item">
                    <Link href="/members">
                      <a>Members</a>
                    </Link>
                  </li>
                  <li className="footer_nav_list_item">
                    <Link href="/careers">
                      <a>Careers</a>
                    </Link>
                  </li>
                  <li className="footer_nav_list_item">
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </nav>
              <a href="#body">pageTop</a>
            </footer>
          );
        }
      })()}
    </>
  );
}
