export {};

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'development' | 'production';
        PORT?: string;
        COUNTRY_LIST_API_URL: string;
        COUNTRY_INFO_API_URL: string;
      }
    }
  }

