import * as express from "express";
import {eventsController} from "./controllers/events";

const app = express();

app.use('/api', eventsController);

export default app;
