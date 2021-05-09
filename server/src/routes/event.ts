import express from "express";
import { getEventsCRDB, getEventsDataStax } from "../controllers/event";

const router = express.Router();

// Takes query param id=n (which is the event id), postgres example
router.get("/crdb", getEventsCRDB);

// Take query param id=n (which is the event id), cassandra example
router.get("/datastax", getEventsDataStax);

export default router;
