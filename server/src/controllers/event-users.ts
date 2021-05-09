import { Request, Response } from "express";
import { Pool } from "pg";
import { client } from "../utils/datastaxConfig";
import { config } from "../utils/postgresConfig";

export const getEventUsersCRDB = async (req: Request, res: Response) => {
  const pool = new Pool(config);
  const client = await pool.connect();
  const eventId = req.query.id || 1;
  console.log("eventid", eventId);
  await client.query(
    `SELECT * FROM users INNER JOIN user_event ON user_event.event_id = ${eventId} WHERE users.user_id = user_event.user_id; `,
    (err: any, queryRes: any) => {
      if (err) {
        return err;
      }
      return res.json(queryRes.rows);
    }
  );
};

export const getEventUsersDataStax = async (req: Request, res: Response) => {
  const eventId = req.query.id || 1;
  console.log("eventid", eventId);
  const astraClient = client;

  await astraClient.connect();
  // search a collection of documents
  const rs = await client.execute(
    `SELECT * FROM ninja.event_users WHERE event_id=${eventId}`
  );
  console.log(`Your cluster returned ${rs.rowLength} row(s)`);

  return res.json(rs.rows);
};
