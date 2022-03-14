import type { NextPage } from 'next';
// import Head from 'next/head';
import Meta from '@/components/meta';
import Header from '@/components/header';
import Footer from '@/components/footer';
import styles from '@/styles/Contents.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <Header props={undefined}></Header>
      <main className={styles.main}>
        <div className={styles.main_inner_s}>
          <h2 className={styles.page_title}>Careers</h2>
          <p className={styles.page_head}>
            現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。
          </p>
          <div className={styles.careers_type}>
            <div className={styles.careers_item}>
              <h3 className={styles.careers_title}>ディレクター</h3>
              <p className={styles.careers_text}>
                現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。
              </p>
            </div>
            <div className={styles.careers_item}>
              <h3 className={styles.careers_title}>デザイナー</h3>
              <p className={styles.careers_text}>
                現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。
              </p>
            </div>
            <div className={styles.careers_item}>
              <h3 className={styles.careers_title}>エンジニア</h3>
              <p className={styles.careers_text}>
                現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。現在、ディレクター、デザイナー、エンジニアの募集を行っております。
              </p>
            </div>
          </div>
          <div className={styles.careers_condition}>
            <dl>
              <dt>給与・待遇</dt>
              <dd>スキル・経験などを考慮</dd>
              <dt>勤務時間</dt>
              <dd>フレックスタイム制(コアタイム 12:00〜16:00)</dd>
              <dt>勤務地</dt>
              <dd>
                〒000-9999
                <br />
                東京都世田谷区世田谷9-9-9 AAAビル 5F
              </dd>
              <dt>休日</dt>
              <dd>
                完全週休2日制（土・日）／祝日、GW、年末年始、
                <br />
                年次有給休暇（入社当月より付与）、夏季休暇、
                <br />
                特別休暇（慶弔休暇、産前産後休暇、育児休暇、介護休暇　等）
              </dd>
              <dt>選考プロセス</dt>
              <dd>書類選考/面接（2－3回）/内定</dd>
              <dt>応募方法</dt>
              <dd>東京本社下のエントリーフォームよりご応募ください</dd>
            </dl>
          </div>
          <div className={styles.btn_wrap}>
            <button>Entry</button>
          </div>
        </div>
      </main>
      <Footer props={undefined}></Footer>
    </>
  );
};

export default Home;
