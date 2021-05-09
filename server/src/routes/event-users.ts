import express from "express";
import {
  getEventUsersCRDB,
  getEventUsersDataStax,
} from "../controllers/event-users";

const router = express.Router();

// Takes query param id=n (which is the event id), postgres example
router.get("/crdb", getEventUsersCRDB);

// Take query param id=n (which is the event id), cassandra example
router.get("/datastax", getEventUsersDataStax);

export default router;
