import "dotenv-safe/config";
import express from "express";
import cors from "cors";
import { createServer } from "http";
import eventUsersRoutes from "./routes/event-users";
import eventRoutes from "./routes/event";

const main = async () => {
  const app = express();
  const httpServer = createServer(app);

  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );
  app.use(express.json({ limit: "16mb" }));
  app.use(express.urlencoded({ limit: "16mb", extended: true }));
  app.use("/event-users", eventUsersRoutes);
  app.use("/events", eventRoutes);

  httpServer.listen(process.env.PORT, () =>
    console.log(`Server running on port: ${process.env.PORT}`)
  );
};

main().catch((err) => {
  console.error(err);
});
