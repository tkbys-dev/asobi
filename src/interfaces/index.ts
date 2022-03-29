export interface PageProps {
  meta?: MetaInfo;
}

export interface MetaInfo {
  title: string;
  description: string;
  keywords: string;
  url?: string;
}

export interface ServiceApi {
  service?: Array<ServiceInfo>;
}

export interface ServiceInfo {
  id: string;
  image: {
    url: string;
    width?: string;
    height?: string;
  };
  body?: string;
}

export type IStyleState = {
  bodyStyle: string;
};
export type BodyUpdateAction = {
  type: 'updateBodyStyle';
  payload: { bodyStyle: string };
};
