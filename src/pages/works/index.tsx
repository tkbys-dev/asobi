import type { NextPage } from 'next';
import Link from 'next/link';

interface WorkConfig {
  category: string;
  company: string;
  link: string;
}

interface IWorkCard {
  config: WorkConfig;
}

const WorkConfigs: WorkConfig[] = [
  {
    category: 'Web',
    company: '株式会社a',
    link: 'a',
  },
  {
    category: 'real',
    company: '株式会社b',
    link: 'b',
  },
  {
    category: 'graphic',
    company: '株式会社c',
    link: 'c',
  },
  {
    category: 'real',
    company: '株式会社d',
    link: 'd',
  },
  {
    category: 'graphic',
    company: '株式会社e',
    link: 'e',
  },
  {
    category: 'Web',
    company: '株式会社f',
    link: 'f',
  },
  {
    category: 'Web',
    company: '株式会社g',
    link: 'g',
  },
  {
    category: 'real',
    company: '株式会社h',
    link: 'h',
  },
  {
    category: 'real',
    company: '株式会社i',
    link: 'i',
  },
];

const WorkCard = ({ config }: IWorkCard) => {
  return (
    <li className="works_item">
      <Link href={`/works/${config.link}`}>
        <a>
          <h3>
            {config.category} / {config.company}
          </h3>
        </a>
      </Link>
    </li>
  );
};

export default function Works() {
  return (
    <>
      <main className="main">
        <div className="main_inner">
          <h2 className="page_title">Works</h2>
          <ul className="works">
            {WorkConfigs.map((config, i) => (
              <WorkCard key={i} config={config} />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
