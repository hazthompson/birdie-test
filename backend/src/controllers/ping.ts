import * as express from "express";
export const pingController = express.Router();
const EventModel = require('../models/EventModel');

pingController.get('/api', async function (_, res) {
  const events = await EventModel.findAll();
  res.status(200).json(events);
});

pingController.get('/api/:careRecipientId', async function (req, res) {
  const recipientsEvents = await EventModel.findAll(
    {
    where: {
      care_recipient_id: req.params.careRecipientId,
     }
    }
    );
  res.status(200).json(recipientsEvents);
});
