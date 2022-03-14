export interface PageProps {
  meta?: MetaInfo;
}

export interface MetaInfo {
  title: string;
  description: string;
  keywords: string;
  url?: string;
}
