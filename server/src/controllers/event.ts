import { Request, Response } from "express";
import { Pool } from "pg";
import { config } from "../utils/postgresConfig";

export const getEventsCRDB = async (req: Request, res: Response) => {
  const pool = new Pool(config);
  const client = await pool.connect();
  const eventId = req.query.id;
  console.log(eventId);
  await client.query(`SELECT * FROM event;`, (err: any, queryRes: any) => {
    if (err) {
      return err;
    }
    return res.json(queryRes.rows);
  });
};

export const getEventsDataStax = async (req: Request, res: Response) => {
  return res.json("TBD");
};
