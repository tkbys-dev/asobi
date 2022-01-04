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
        <h2 className={styles.page_title}>Careers</h2>
        <p className={styles.page_head}>現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。</p>
        <div className={styles.careers_type}>
          <div className={styles.careers_item}>
            <h3 className={styles.careers_title}>ディレクター</h3>
            <p className={styles.careers_text}>現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。</p>
          </div>
          <div className={styles.careers_item}>
            <h3 className={styles.careers_title}>デザイナー</h3>
            <p className={styles.careers_text}>現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。</p>
          </div>
          <div className={styles.careers_item}>
            <h3 className={styles.careers_title}>エンジニア</h3>
            <p className={styles.careers_text}>現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。</p>
          </div>
        </div>
        <dl className={styles.careers_condition}>
          <dt>給与・待遇</dt><dd></dd>
          <dt>勤務時間</dt><dd></dd>
          <dt>勤務地</dt><dd></dd>
          <dt>休日</dt><dd></dd>
          <dt>選考プロセス</dt><dd></dd>
          <dt>応募方法</dt><dd></dd>
        </dl>
        <div className={styles.btn_wrap}>
          <button>Entry</button>
        </div>
      </main>
      <Footer props={undefined}></Footer>
    </>
  );
};

export default Home;
