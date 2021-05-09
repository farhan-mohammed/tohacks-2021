declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    CORS_ORIGIN: string;
    CRDB_PASSWORD: string;
    CRDB_USER: string;
    CRDB_DB: string;
    CRDB_PORT: string;
    CRDB_HOST: string;
    ASTRA_CLIENT_ID: string;
    ASTRA_CLIENT_SECRET: string;
    ASTRA_DB_APPLICATION_TOKEN: string;
    ASTRA_DB_CONNECT_BUNDLE_PATH: string;
  }
}
