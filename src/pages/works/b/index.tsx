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
        <h2 className={styles.page_title}>株式会社a</h2>
        <div className={styles.works_block}>
          <a href="" className={styles.works_prev}></a>
          <div className={styles.works_detail}>
            <p className={styles.text}>広告、映像、サイトリニューアルを担当しました。広告、映像、サイトリニューアルを担当しました。広告、映像、サイトリニューアルを担当しました。</p>
            <p className={styles.text}>Promotion, Video, Web / 株式会社abc</p>
          </div>
          <a href="" className={styles.works_next}></a>
        </div>
      </main>
      <Footer props={undefined}></Footer>
    </>
  );
};

export default Home;
