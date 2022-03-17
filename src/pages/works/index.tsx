import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <main className="main">
        <div className="main_inner">
          <h2 className="page_title">Works</h2>
          <ul className="works">
            <li className="works_item">
              <Link href="/works/a">
                <a>
                  <h3>Web / 株式会社a</h3>
                </a>
              </Link>
            </li>
            <li className="works_item">
              <Link href="/works/b">
                <a>
                  <h3>Web / 株式会社b</h3>
                </a>
              </Link>
            </li>
            <li className="works_item">
              <Link href="/works/c">
                <a>
                  <h3>Web / 株式会社c</h3>
                </a>
              </Link>
            </li>
            <li className="works_item">
              <Link href="/works/d">
                <a>
                  <h3>Web / 株式会社d</h3>
                </a>
              </Link>
            </li>
            <li className="works_item">
              <Link href="/works/e">
                <a>
                  <h3>Web / 株式会社e</h3>
                </a>
              </Link>
            </li>
            <li className="works_item">
              <Link href="/works/f">
                <a>
                  <h3>Web / 株式会社f</h3>
                </a>
              </Link>
            </li>
            <li className="works_item">
              <Link href="/works/g">
                <a>
                  <h3>Web / 株式会社g</h3>
                </a>
              </Link>
            </li>
            <li className="works_item">
              <Link href="/works/h">
                <a>
                  <h3>Web / 株式会社h</h3>
                </a>
              </Link>
            </li>
            <li className="works_item">
              <Link href="/works/i">
                <a>
                  <h3>Web / 株式会社i</h3>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
