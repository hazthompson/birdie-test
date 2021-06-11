import * as express from "express";
export const eventsController = express.Router();
import EventModel from "../models/EventModel";

eventsController.get("/events", async function (_, res) {
  const events = await EventModel.findAll({ order: [["timeStamp", "DESC"]] });
  res.status(200).json(events);
});

eventsController.get("/events/:careRecipientId", async function (req, res) {
  const recipientsEvents = await EventModel.findAll({
    where: {
      care_recipient_id: req.params.careRecipientId,
      event_type: req.query.eventType || [],
    },
    order: [["timeStamp", "DESC"]],
  });
  res.status(200).json(recipientsEvents);
});
