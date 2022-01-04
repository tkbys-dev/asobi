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
        <h2 className={styles.page_title}>Members</h2>
        <ul className={styles.members}>
          <li className={styles.members_item}><img src='' width='501' height='400' alt='' /><h3>山田　太郎</h3><p>社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。</p></li>
          <li className={styles.members_item}><img src='' width='501' height='400' alt='' /><h3>山田　太郎</h3><p>社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。</p></li>
          <li className={styles.members_item}><img src='' width='501' height='400' alt='' /><h3>山田　太郎</h3><p>社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。</p></li>
          <li className={styles.members_item}><img src='' width='501' height='400' alt='' /><h3>山田　太郎</h3><p>社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。</p></li>
          <li className={styles.members_item}><img src='' width='501' height='400' alt='' /><h3>山田　太郎</h3><p>社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。</p></li>
          <li className={styles.members_item}><img src='' width='501' height='400' alt='' /><h3>山田　太郎</h3><p>社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。</p></li>
          <li className={styles.members_item}><img src='' width='501' height='400' alt='' /><h3>山田　太郎</h3><p>社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。</p></li>
          <li className={styles.members_item}><img src='' width='501' height='400' alt='' /><h3>山田　太郎</h3><p>社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。</p></li>
          <li className={styles.members_item}><img src='' width='501' height='400' alt='' /><h3>山田　太郎</h3><p>社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。</p></li>
        </ul>
      </main>
      <Footer props={undefined}></Footer>
    </>
  );
};

export default Home;
