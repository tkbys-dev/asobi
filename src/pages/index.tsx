import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { getMeta } from './api/airtable';
import { PageProps } from 'interfaces';
import TopImages from '@/components/TopImages';
import Mesh from '@/components/Mesh';

export default function Home({ meta }: PageProps) {
  return (
    <>
      <Head>
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
        <meta name="keywords" content={meta?.keywords} />
        <meta property="og:url" content={meta?.url} />
      </Head>
      <TopImages />
      <Mesh />
      <h1 className="top_title">
        test
        <br />
        sample, sample, sample
        <br />
        test, test, test, test, test, test, test, test
      </h1>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const meta = await getMeta();

  return {
    props: meta,
  };
};
