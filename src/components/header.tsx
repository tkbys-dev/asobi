import styles from '@/styles/Home.module.scss';

export default function Header({ props }: { props: any }) {
  return (
    <header className={styles.header}>
      <img src="/sample/assets/img/sample.jpg" />
    </header>
  );
}
