import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <main className="main">
        <div className="main_inner_s">
          <h2 className="page_title">Contact</h2>
          <p className="page_head">
            下記フォームのご入力をお願いします。1週間以内に担当者より、ご連絡いたします。下記フォームのご入力をお願いします。1週間以内に担当者より、ご連絡いたします。下記フォームのご入力をお願いします。1週間以内に担当者より、ご連絡いたします。
          </p>
          <form>
            <div className="form_wrap">
              <div className="form_label">お名前</div>
              <div className="form_input">
                <input
                  type="text"
                  name="company_name"
                  placeholder="お名前をご入力ください"
                  value=""
                />
              </div>
            </div>
            <div className="form_wrap">
              <div className="form_label">会社名</div>
              <div className="form_input">
                <input
                  type="text"
                  name="company_name"
                  placeholder="会社名をご入力ください"
                  value=""
                />
              </div>
            </div>
            <div className="form_wrap">
              <div className="form_label">メールアドレス</div>
              <div className="form_input">
                <input
                  type="text"
                  name="company_name"
                  placeholder="xxx.@aaaaaaaaa.com"
                  value=""
                />
              </div>
            </div>
            <div className="form_wrap">
              <div className="form_label">お問い合わせ内容</div>
              <div className="form_input">
                <textarea
                  name="company_name"
                  placeholder="お問い合わせの詳細を1,000文字以内でご入力ください"
                  value=""
                />
              </div>
            </div>
            <div className="form_accept">
              <input type="checkbox" />
              <span>個人情報の取り扱いに同意します。</span>
            </div>
            <div className="btn_wrap">
              <button>Contact</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Home;
