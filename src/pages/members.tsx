import type { NextPage } from 'next';

interface MemberConfig {
  name: string;
  description: string;
  alt: string;
}

interface IMemberCard {
  config: MemberConfig;
}

const MemberConfigs: MemberConfig[] = [
  { name: '山田', description: 'テスト山田の説明', alt: 'テスト山田' },
  { name: '鈴木', description: 'テスト鈴木の説明', alt: 'テスト鈴木' },
  { name: '上杉', description: 'テスト上杉の説明', alt: 'テスト上杉' },
  { name: '森', description: 'テスト森の説明', alt: 'テスト森' },
  { name: '吉岡', description: 'テスト吉岡の説明', alt: 'テスト吉岡' },
  { name: '古井', description: 'テスト古井の説明', alt: 'テスト古井' },
  { name: '代々木', description: 'テスト代々木の説明', alt: 'テスト代々木' },
  { name: '高橋', description: 'テスト高橋の説明', alt: 'テスト高橋' },
  { name: '海元', description: 'テスト海元の説明', alt: 'テスト海元' },
];

const MemberCard = ({ config }: IMemberCard) => {
  return (
    <li className="members_item">
      <img
        src="/assets/img/members/member.jpg"
        width="500"
        height="400"
        className="members_img"
        alt={config.alt}
      />
      <h3 className="members_name">{config.name}</h3>
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
