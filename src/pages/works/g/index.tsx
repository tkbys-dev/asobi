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
          <h2 className={styles.page_title}>Sample aaaa bbbb cccc</h2>
          <div className={styles.works_each}>
            <Link href="/works/f"><a className={`${styles.btn} ${styles.prev}`}></a></Link>
            <div className={styles.works_detail}>
              <div className={styles.text}>
                <p>広告、映像、サイトリニューアルを担当しました。広告、映像、サイトリニューアルを担当しました。広告、映像、サイトリニューアルを担当しました。</p>
                <p>Promotion, Video, Web / 株式会社g</p>
              </div>
            </div>
            <Link href="/works/h"><a className={`${styles.btn} ${styles.next}`}></a></Link>
          </div>
        </div>
      </main>
      <Footer props={undefined}></Footer>
    </>
  );
};

export default Home;
