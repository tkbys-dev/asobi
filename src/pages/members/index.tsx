import type { NextPage } from 'next';
// import Head from 'next/head';
import Meta from '@/components/meta';
import Header from '@/components/header';
import Footer from '@/components/footer';
import styles from '@/styles/Contents.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <Header />
      <main className={styles.main}>
        <div className={styles.main_inner}>
          <h2 className={styles.page_title}>Members</h2>
          <ul className={styles.members}>
            <li className={styles.members_item}>
              <img
                src="/assets/img/members/member.jpg"
                width="500"
                height="400"
                className={styles.members_img}
                alt=""
              />
              <h3 className={styles.members_name}>山田　太郎</h3>
              <p className={styles.members_description}>
                社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。
              </p>
            </li>
            <li className={styles.members_item}>
              <img
                src="/assets/img/members/member.jpg"
                width="500"
                height="400"
                className={styles.members_img}
                alt=""
              />
              <h3 className={styles.members_name}>山田　太郎</h3>
              <p className={styles.members_description}>
                社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。
              </p>
            </li>
            <li className={styles.members_item}>
              <img
                src="/assets/img/members/member.jpg"
                width="500"
                height="400"
                className={styles.members_img}
                alt=""
              />
              <h3 className={styles.members_name}>山田　太郎</h3>
              <p className={styles.members_description}>
                社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。
              </p>
            </li>
            <li className={styles.members_item}>
              <img
                src="/assets/img/members/member.jpg"
                width="500"
                height="400"
                className={styles.members_img}
                alt=""
              />
              <h3 className={styles.members_name}>山田　太郎</h3>
              <p className={styles.members_description}>
                社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。
              </p>
            </li>
            <li className={styles.members_item}>
              <img
                src="/assets/img/members/member.jpg"
                width="500"
                height="400"
                className={styles.members_img}
                alt=""
              />
              <h3 className={styles.members_name}>山田　太郎</h3>
              <p className={styles.members_description}>
                社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。
              </p>
            </li>
            <li className={styles.members_item}>
              <img
                src="/assets/img/members/member.jpg"
                width="500"
                height="400"
                className={styles.members_img}
                alt=""
              />
              <h3 className={styles.members_name}>山田　太郎</h3>
              <p className={styles.members_description}>
                社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。
              </p>
            </li>
            <li className={styles.members_item}>
              <img
                src="/assets/img/members/member.jpg"
                width="500"
                height="400"
                className={styles.members_img}
                alt=""
              />
              <h3 className={styles.members_name}>山田　太郎</h3>
              <p className={styles.members_description}>
                社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。
              </p>
            </li>
            <li className={styles.members_item}>
              <img
                src="/assets/img/members/member.jpg"
                width="500"
                height="400"
                className={styles.members_img}
                alt=""
              />
              <h3 className={styles.members_name}>山田　太郎</h3>
              <p className={styles.members_description}>
                社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。
              </p>
            </li>
            <li className={styles.members_item}>
              <img
                src="/assets/img/members/member.jpg"
                width="500"
                height="400"
                className={styles.members_img}
                alt=""
              />
              <h3 className={styles.members_name}>山田　太郎</h3>
              <p className={styles.members_description}>
                社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。社員の説明。
              </p>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
