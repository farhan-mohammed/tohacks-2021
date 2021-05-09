import { Client } from "cassandra-driver";

// Astra client config
export const client = new Client({
  cloud: {
    secureConnectBundle: process.env.ASTRA_DB_CONNECT_BUNDLE_PATH,
  },
  credentials: {
    username: process.env.ASTRA_CLIENT_ID,
    password: process.env.ASTRA_CLIENT_SECRET,
  },
});
