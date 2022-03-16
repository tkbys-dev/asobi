import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Meta from '@/components/meta';
import Header from '@/components/header';
import styles from '@/styles/Top.module.scss';
import { getMeta } from './api/airtable';
import { MetaInfo, PageProps } from 'interfaces';

export default function Home({ meta }: PageProps) {
  // console.log(meta?.title);
  return (
    <>
      <Head>
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
        <meta name="keywords" content={meta?.keywords} />
        <meta property="og:url" content={meta?.url} />
      </Head>
      <main className={styles.top}>
        <h1 className={styles.hero_title}>
          test
          <br />
          sample, sample, sample
          <br />
          test, test, test, test, test, test, test, test
        </h1>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const meta = await getMeta();

  // console.log(meta);
  return {
    props: meta,
  };
};
