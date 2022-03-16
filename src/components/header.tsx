import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <a>
          <img
            src="/asobi/assets/img/common/header-logo.svg"
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
  );
}
