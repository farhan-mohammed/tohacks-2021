import { Request, Response } from "express";
import { Pool } from "pg";
import { config } from "../utils/postgresConfig";

export const getEventUsersCRDB = async (req: Request, res: Response) => {
  const pool = new Pool(config);
  const client = await pool.connect();
  const eventId = req.query.id;
  console.log(eventId);
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
  return res.json("TBD");
};
