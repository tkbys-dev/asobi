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
        <h2 className={styles.page_title}>Contact</h2>
        <p className={styles.page_head}>下記フォームのご入力をお願いします。1週間以内に担当者より、ご連絡いたします。下記フォームのご入力をお願いします。1週間以内に担当者より、ご連絡いたします。下記フォームのご入力をお願いします。1週間以内に担当者より、ご連絡いたします。</p>
        <form>
          <div className={styles.a}>
            <div className={styles.a}>お名前</div>
            <div className={styles.a}><input type="text" name="company_name" placeholder="お名前をご入力ください" value="" /></div>
          </div>
          <div className={styles.a}>
            <div className={styles.a}>会社名</div>
            <div className={styles.a}><input type="text" name="company_name" placeholder="会社名をご入力ください" value="" /></div>
          </div>
          <div className={styles.a}>
            <div className={styles.a}>メールアドレス</div>
            <div className={styles.a}><input type="text" name="company_name" placeholder="xxx.@aaaaaaaaa.com" value="" /></div>
          </div>
          <div className={styles.a}>
            <div className={styles.a}>メールアドレス</div>
            <div className={styles.a}><textarea name="company_name" placeholder="お問い合わせの詳細を1,000文字以内でご入力ください" value="" /></div>
          </div>
        </form>
      </main>
      <Footer props={undefined}></Footer>
    </>
  );
};

export default Home;
