import type { NextPage } from 'next';

interface MemberConfig {
  name_ja: string;
  name_en: string;
  description: string;
  alt: string;
}

interface IMemberCard {
  config: MemberConfig;
}

const MemberConfigs: MemberConfig[] = [
  {
    name_ja: '山田',
    name_en: 'yamada',
    description: 'テスト山田の説明',
    alt: 'テスト山田',
  },
  {
    name_ja: '鈴木',
    name_en: 'suzuki',
    description: 'テスト鈴木の説明',
    alt: 'テスト鈴木',
  },
  {
    name_ja: '上杉',
    name_en: 'uesugi',
    description: 'テスト上杉の説明',
    alt: 'テスト上杉',
  },
  {
    name_ja: '森',
    name_en: 'mori',
    description: 'テスト森の説明',
    alt: 'テスト森',
  },
  {
    name_ja: '吉岡',
    name_en: 'yoshioka',
    description: 'テスト吉岡の説明',
    alt: 'テスト吉岡',
  },
  {
    name_ja: '古井',
    name_en: 'furui',
    description: 'テスト古井の説明',
    alt: 'テスト古井',
  },
  {
    name_ja: '代々木',
    name_en: 'yoyogi',
    description: 'テスト代々木の説明',
    alt: 'テスト代々木',
  },
  {
    name_ja: '高橋',
    name_en: 'takahashi',
    description: 'テスト高橋の説明',
    alt: 'テスト高橋',
  },
  {
    name_ja: '海元',
    name_en: 'umimoto',
    description: 'テスト海元の説明',
    alt: 'テスト海元',
  },
];

const MemberCard = ({ config }: IMemberCard) => {
  return (
    <li className="members_item">
      <img
        src={`/assets/img/members/${config.name_en}.jpg`}
        width="500"
        height="400"
        className="members_img"
        alt={config.alt}
      />
      <h3 className="members_name">{config.name_ja}</h3>
      <p className="members_description">{config.description}</p>
    </li>
  );
};

export default function Members() {
  return (
    <>
      <main className="main">
        <div className="main_inner">
          <h2 className="page_title">Members</h2>
          <ul className="members">
            {MemberConfigs.map((config, i) => (
              <MemberCard key={i} config={config} />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
