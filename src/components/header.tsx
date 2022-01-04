import styles from '@/styles/Home.module.scss';

export default function Header({ props }: { props: any }) {
  return (
    <header className={styles.header}>
      <img src="/sample/assets/img/header-logo.svg" className={styles.header_logo} width="132" height="49"/>
      <nav className={styles.header_nav}>
        <ul className={styles.header_list}>
          <li className={styles.header_list_item}><a href='./works'>Works</a></li>
          <li className={styles.header_list_item}><a href='./about'></a>About</li>
          <li className={styles.header_list_item}><a href='./members'></a>Members</li>
          <li className={styles.header_list_item}><a href='./careers'></a>Careers</li>
          <li className={styles.header_list_item}><a href='./contact'></a>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
