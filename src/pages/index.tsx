import type { NextPage } from 'next';
import Head from 'next/head';
import HeadMeta from '@/components/head';
import Header from '@/components/header';
import styles from '@/styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <HeadMeta props={undefined} />
      <Header props={undefined} />
      <main className={styles.main}>
        <h1 className={styles.hero_title}>test<br />sample, sample, sample<br />test, test, test, test, test, test, test, test</h1>
      </main>
    </>
  );
};

export default Home;
