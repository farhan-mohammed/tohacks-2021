import express from "express";
import { getEventsCRDB, getEventsDataStax } from "../controllers/event";

const router = express.Router();

// Returns all unique event in CRDB sample
router.get("/crdb", getEventsCRDB);

// Returns all unique event in dataStax sample
router.get("/datastax", getEventsDataStax);

export default router;
