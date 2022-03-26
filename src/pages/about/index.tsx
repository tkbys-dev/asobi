import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { MetaInfo, ServiceInfo } from 'interfaces';
import { getMeta } from 'pages/api/airtable';
import { client } from '../../libs/client';

interface Props {
  meta?: MetaInfo;
  service?: Array<ServiceInfo>;
}

const About: NextPage<Props> = ({ meta, service }) => {
  return (
    <>
      <Head>
        <title>aaaaaa</title>
        <meta name="description" content="aaaaaa" />
        <meta name="keywords" content="aa,bb,cc" />
        <meta property="og:url" content="aaaa.jp" />
      </Head>
      <main className="main">
        <div className="main_inner_s">
          <h2 className="page_title">About</h2>
          <div className="about">
            <p className="page_head">
              私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは
            </p>
            <p className="page_head">
              私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは
            </p>
            <p className="page_head">
              私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは私たちは
            </p>
          </div>
          <div className="company">
            <h3 className="company_title">Company</h3>
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
        {/* <div className="service">
          <ul>
            {service?.map((s) => {
              return (
                <li key={s.id}>
                  <img src={s.image.url} />
                  <p>{s.body}</p>
                </li>
              );
            })}
          </ul>
        </div> */}
      </main>
    </>
  );
};
export default About;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({
    endpoint: 'service',
  });

  const meta = await getMeta();

  return {
    props: {
      meta,
      service: data.contents,
    },
  };
};
