import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <main className="main">
        <div className="main_inner">
          <h2 className="page_title">Sample aaaa bbbb cccc</h2>
          <div className="works_each">
            <Link href="/works/i">
              <a className="btn prev"></a>
            </Link>
            <div className="works_detail">
              <div className="text">
                <p>
                  広告、映像、サイトリニューアルを担当しました。広告、映像、サイトリニューアルを担当しました。広告、映像、サイトリニューアルを担当しました。
                </p>
                <p>Promotion, Video, Web / 株式会社a</p>
              </div>
            </div>
            <Link href="/works/b">
              <a className="btn next"></a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
