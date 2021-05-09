// Configure the database connection.
export const config = {
  user: process.env.CRDB_USER,
  password: process.env.CRDB_PASSWORD,
  host: process.env.CRDB_HOST,
  database: process.env.CRDB_DB,
  port: parseInt(process.env.CRDB_PORT),
  ssl: {
    rejectUnauthorized: false,
  },
  //For secure connection:
  /*ssl: {
        ca: fs.readFileSync('/certs/ca.crt')
            .toString()
    }*/
};
