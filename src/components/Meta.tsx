import { MetaInfo, PageProps } from 'interfaces';
import Head from 'next/head';

// export default function Meta({ meta }: PageProps) {
//   return (
//     <Head>
//       <title>{meta?.title}</title>
//       <meta name="description" content={meta?.description} />
//       <meta name="keywords" content={meta?.keywords} />
//       <meta property="og:url" content={meta?.url} />
//     </Head>
//   );
// }

const Meta: React.FC<MetaInfo> = ({ title, description, keywords, url }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:url" content={url} />
    </Head>
  );
};
export default Meta;
