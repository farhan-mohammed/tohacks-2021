declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    CORS_ORIGIN: string;
    CRDB_PASSWORD: string;
    CRDB_USER: string;
    CRDB_DB: string;
    CRDB_PORT: string;
    CRDB_HOST: string;
  }
}
