import Link from 'next/link';
import styles from '@/styles/Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <img
            src="/asobi/assets/img/common/header-logo.svg"
            className={styles.header_logo}
            width="132"
            height="49"
            alt="test. inc"
          />
        </a>
      </Link>
      <nav className={styles.header_nav}>
        <ul className={styles.header_nav_list}>
          <li className={styles.header_nav_list_item}>
            <Link href="/works">
              <a>Works</a>
            </Link>
          </li>
          <li className={styles.header_nav_list_item}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.header_nav_list_item}>
            <Link href="/members">
              <a>Members</a>
            </Link>
          </li>
          <li className={styles.header_nav_list_item}>
            <Link href="/careers">
              <a>Careers</a>
            </Link>
          </li>
          <li className={styles.header_nav_list_item}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
