import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Meta from '@/components/meta';
import Header from '@/components/header';
import Footer from '@/components/footer';
import styles from '@/styles/Contents.module.scss';
import { PageProps } from 'interfaces';
import { getMeta } from 'pages/api/airtable';

export default function Home({ meta }: PageProps) {
  return (
    <>
      <Head>
        <title>aaaaaa</title>
        <meta name="description" content="aaaaaa" />
        <meta name="keywords" content="aa,bb,cc" />
        <meta property="og:url" content="aaaa.jp" />
      </Head>
      <main className={styles.main}>
        <div className={styles.main_inner_s}>
          <h2 className={styles.page_title}>About</h2>
          <div className={styles.about}>
            <p className={styles.page_head}>
              私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは
            </p>
            <p className={styles.page_head}>
              私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは
            </p>
            <p className={styles.page_head}>
              私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは
            </p>
          </div>
          <div className={styles.company}>
            <h3 className={styles.company_title}>Company</h3>
            <dl>
              <dt>会社名</dt>
              <dd>株式会社test</dd>
              <dt>設立</dt>
              <dd>2000年10月2日</dd>
              <dt>資本金</dt>
              <dd>1000万円</dd>
              <dt>代表取締役</dt>
              <dd>山田　山田</dd>
              <dt>従業員数</dt>
              <dd>30人</dd>
              <dt>住所</dt>
              <dd>
                東京本社
                <br />
                〒000-9999
                <br />
                東京都世田谷区世田谷9-9-9 AAAビル 5F
              </dd>
              <dd>
                北海道支社
                <br />
                〒333-2222
                <br />
                北海道札幌市中央区22-22-1 BBBビル 3F
              </dd>
            </dl>
          </div>
        </div>
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
