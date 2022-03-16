import type { NextPage } from 'next';
import Link from 'next/link';

import styles from '@/styles/Contents.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.main_inner}>
          <h2 className={styles.page_title}>Sample aaaa bbbb cccc</h2>
          <div className={styles.works_each}>
            <Link href="/works/g">
              <a className={`${styles.btn} ${styles.prev}`}></a>
            </Link>
            <div className={styles.works_detail}>
              <div className={styles.text}>
                <p>
                  広告、映像、サイトリニューアルを担当しました。広告、映像、サイトリニューアルを担当しました。広告、映像、サイトリニューアルを担当しました。
                </p>
                <p>Promotion, Video, Web / 株式会社h</p>
              </div>
            </div>
            <Link href="/works/i">
              <a className={`${styles.btn} ${styles.next}`}></a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
