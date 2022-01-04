import type { NextPage } from 'next';
// import Head from 'next/head';
import HeadMeta from '@/components/head';
import Header from '@/components/header';
import Footer from '@/components/footer';
import styles from '@/styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <HeadMeta props={undefined} />
      <Header props={undefined}></Header>
      <main className={styles.main}>
        <h2 className={styles.page_title}>Works</h2>
        <ul className={styles.works}>
          <li className={styles.works_item}><a href=""><h3>Web / 株式会社a</h3></a></li>
          <li className={styles.works_item}><a href=""><h3>Web / 株式会社b</h3></a></li>
          <li className={styles.works_item}><a href=""><h3>Web / 株式会社c</h3></a></li>
          <li className={styles.works_item}><a href=""><h3>Web / 株式会社d</h3></a></li>
          <li className={styles.works_item}><a href=""><h3>Web / 株式会社e</h3></a></li>
          <li className={styles.works_item}><a href=""><h3>Web / 株式会社f</h3></a></li>
          <li className={styles.works_item}><a href=""><h3>Web / 株式会社g</h3></a></li>
          <li className={styles.works_item}><a href=""><h3>Web / 株式会社h</h3></a></li>
          <li className={styles.works_item}><a href=""><h3>Web / 株式会社i</h3></a></li>
        </ul>
      </main>
      <Footer props={undefined}></Footer>
    </>
  );
};

export default Home;
