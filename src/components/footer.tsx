import Link from 'next/link';
import styles from '@/styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <a className={styles.footer_link}>
          <img
            src="/assets/img/common/footer-logo.svg"
            className={styles.footer_logo}
            width="132"
            height="49"
            alt="test. inc"
          />
        </a>
      </Link>
      <nav className={styles.footer_nav}>
        <ul className={styles.footer_nav_list}>
          <li className={styles.footer_nav_list_item}>
            <Link href="/works">
              <a>Works</a>
            </Link>
          </li>
          <li className={styles.footer_nav_list_item}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.footer_nav_list_item}>
            <Link href="/members">
              <a>Members</a>
            </Link>
          </li>
          <li className={styles.footer_nav_list_item}>
            <Link href="/careers">
              <a>Careers</a>
            </Link>
          </li>
          <li className={styles.footer_nav_list_item}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
