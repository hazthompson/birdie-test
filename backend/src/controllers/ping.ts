import * as express from "express";
export const pingController = express.Router();
const EventModel = require('../models/EventModel');

pingController.get('/api', async function (_, res) {
  const events = await EventModel.findAll();
  // console.log('events', events)
  res.status(200).json(events);
});
