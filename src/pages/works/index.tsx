import type { NextPage } from 'next';
import Link from 'next/link';
import HeadMeta from '@/components/head';
import Header from '@/components/header';
import Footer from '@/components/footer';
import styles from '@/styles/Contents.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <HeadMeta props={undefined} />
      <Header props={undefined}></Header>
      <main className={styles.main}>
        <div className={styles.main_inner}>
          <h2 className={styles.page_title}>Works</h2>
          <ul className={styles.works}>
            <li className={styles.works_item}><Link href="/works/a"><a><h3>Web / 株式会社a</h3></a></Link></li>
            <li className={styles.works_item}><Link href="/works/b"><a><h3>Web / 株式会社b</h3></a></Link></li>
            <li className={styles.works_item}><Link href="/works/c"><a><h3>Web / 株式会社c</h3></a></Link></li>
            <li className={styles.works_item}><Link href="/works/d"><a><h3>Web / 株式会社d</h3></a></Link></li>
            <li className={styles.works_item}><Link href="/works/e"><a><h3>Web / 株式会社e</h3></a></Link></li>
            <li className={styles.works_item}><Link href="/works/f"><a><h3>Web / 株式会社f</h3></a></Link></li>
            <li className={styles.works_item}><Link href="/works/g"><a><h3>Web / 株式会社g</h3></a></Link></li>
            <li className={styles.works_item}><Link href="/works/h"><a><h3>Web / 株式会社h</h3></a></Link></li>
            <li className={styles.works_item}><Link href="/works/i"><a><h3>Web / 株式会社i</h3></a></Link></li>
          </ul>
        </div>
      </main>
      <Footer props={undefined}></Footer>
    </>
  );
};

export default Home;
