import { Client } from "cassandra-driver";

// Astra client config
export const client = new Client({
  cloud: {
    secureConnectBundle: "/home/mato/secure-connect-eventable.zip",
  },
  credentials: {
    username: process.env.ASTRA_CLIENT_ID,
    password: process.env.ASTRA_CLIENT_SECRET,
  },
});
