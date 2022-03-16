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
        <div className={styles.main_inner_s}>
          <h2 className={styles.page_title}>Contact</h2>
          <p className={styles.page_head}>
            下記フォームのご入力をお願いします。1週間以内に担当者より、ご連絡いたします。下記フォームのご入力をお願いします。1週間以内に担当者より、ご連絡いたします。下記フォームのご入力をお願いします。1週間以内に担当者より、ご連絡いたします。
          </p>
          <form>
            <div className={styles.form_wrap}>
              <div className={styles.form_label}>お名前</div>
              <div className={styles.form_input}>
                <input
                  type="text"
                  name="company_name"
                  placeholder="お名前をご入力ください"
                  value=""
                />
              </div>
            </div>
            <div className={styles.form_wrap}>
              <div className={styles.form_label}>会社名</div>
              <div className={styles.form_input}>
                <input
                  type="text"
                  name="company_name"
                  placeholder="会社名をご入力ください"
                  value=""
                />
              </div>
            </div>
            <div className={styles.form_wrap}>
              <div className={styles.form_label}>メールアドレス</div>
              <div className={styles.form_input}>
                <input
                  type="text"
                  name="company_name"
                  placeholder="xxx.@aaaaaaaaa.com"
                  value=""
                />
              </div>
            </div>
            <div className={styles.form_wrap}>
              <div className={styles.form_label}>お問い合わせ内容</div>
              <div className={styles.form_input}>
                <textarea
                  name="company_name"
                  placeholder="お問い合わせの詳細を1,000文字以内でご入力ください"
                  value=""
                />
              </div>
            </div>
            <div className={styles.form_accept}>
              <input type="checkbox" />
              <span>個人情報の取り扱いに同意します。</span>
            </div>
            <div className={styles.btn_wrap}>
              <button>Contact</button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
