import { Request, Response } from "express";
import { Pool } from "pg";
import { config } from "../utils/postgresConfig";
import { client } from "../utils/datastaxConfig";

export const getEventsCRDB = async (_: Request, res: Response) => {
  const pool = new Pool(config);
  const client = await pool.connect();
  await client.query(`SELECT * FROM event;`, (err: any, queryRes: any) => {
    if (err) {
      return err;
    }
    return res.json(queryRes.rows);
  });
};

export const getEventsDataStax = async (_: Request, res: Response) => {
  const astraClient = client;

  await astraClient.connect();
  // search a collection of documents
  const rs = await astraClient.execute(`SELECT * FROM ninja.event_users`);
  console.log(`Your cluster returned ${rs.rowLength} row(s)`);
  const rows = rs.rows.filter((value, index, self) => {
    for (let i = index + 1; i < rs.rows.length; ++i) {
      if (value.event_id === rs.rows[i].event_id) {
        return false;
      }
    }
    return true;
  });
  return res.json(rows);
};
