import * as express from "express";
import { eventsController } from "./controllers/events";
// eslint-disable-next-line
const path = require("path");
const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../../frontend/build")));

app.use("/api", eventsController);

// All other GET requests not handled before will return our React app
app.get("*", (_req, res) => {
  res.sendFile(path.resolve(__dirname, "../../frontend/build", "index.html"));
});

export default app;
