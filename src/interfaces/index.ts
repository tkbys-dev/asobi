export interface PageProps {
  meta?: MetaInfo;
}

export interface MetaInfo {
  title: string;
  description: string;
  keywords: string;
  url?: string;
}

export interface ApiProps {
  service?: ServiceApi;
}

export interface ServiceApi {
  id: string;
  serviceImage: {
    url: string;
    width?: string;
    height?: string;
  };
  serviceBody?: string;
}
