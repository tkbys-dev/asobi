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
        <h2 className={styles.page_title}>About</h2>
        <div className={styles.about}>
          <p className={styles.page_head}>私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは</p>
          <p className={styles.page_head}>私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは</p>
          <p className={styles.page_head}>私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは</p>
        </div>
        <div className={styles.company}>
          <h3 className={styles.company_title}>Company</h3>
          <dl>
            <dt>会社名</dt><dd>株式会社test</dd>
            <dt>設立</dt><dd></dd>
            <dt>資本金</dt><dd></dd>
            <dt>代表取締役</dt><dd></dd>
            <dt>従業員数</dt><dd></dd>
            <dt>住所</dt><dd></dd><dd></dd>
          </dl>
        </div>
      </main>
      <Footer props={undefined}></Footer>
    </>
  );
};

export default Home;
