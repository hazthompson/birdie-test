import app from "../src/application";
import * as request from "supertest";
import { EventModelInterface } from "../../utils/interfaces";
import EventModel from "../src/models/EventModel";

beforeEach(() => {
  jest.resetModules();
});

describe("GET /api/events", () => {
  let mockEvents: Array<EventModelInterface> = [];

  beforeEach(() => {
    // @ts-ignore
    EventModel.findAll = jest.fn(() => mockEvents);
  });

  describe("when there are no events", () => {
    it("returns an empty response", async () => {
      const response = await request(app).get("/api/events");
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  });

  describe("when there are some events", () => {
    beforeEach(() => {
      mockEvents = [
        {
          id: 1,
          event_type: "check_in",
          care_recipient_id: "ad3512a6-91b1-4d7d-a005-6f8764dd0111",
          caregiver_id: "ac3967a6-1392-4227-9987-a201e0f8f287",
          observation_event_id: null,
          timestamp: "2019-04-29T13:19:23.456Z",
          payload: {
            id: 1,
            note: "note",
            fluid: "regular",
            pad_condition: "wet",
            mood: "okay",
            severity: "low",
          },
        },
        {
          id: 2,
          event_type: "regular_medication_taken",
          care_recipient_id: "ad3512a6-91b1-4d7d-a005-6f8764dd0111",
          caregiver_id: "ac3967a6-1392-4227-9987-a201e0f8f287",
          observation_event_id: null,
          timestamp: "2010-01-10T18:19:23.456Z",
          payload: {
            id: 2,
            note: "note",
            fluid: "regular",
            pad_condition: "wet",
            mood: "okay",
            severity: "",
          },
        },
      ];
    });

    it("returns the events as JSON", async () => {
      const response = await request(app).get("/api/events");
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockEvents);
    });
  });
});

describe("GET /api/events/:careRecipientId", () => {
  let mockEvents: Array<EventModelInterface> = [];

  beforeEach(() => {
    // @ts-ignore
    EventModel.findAll = jest.fn(() => mockEvents);
  });

  describe("when there are no events for a specific care recipient", () => {
    it("returns an empty response", async () => {
      const careRecipientId = "50";
      const response = await request(app).get(`/api/events/${careRecipientId}`);
      expect(EventModel.findAll).toHaveBeenCalledWith({
        where: {
          care_recipient_id: careRecipientId,
        },
      });
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  });

  describe("when there are some events for a specific care recipient", () => {
    beforeEach(() => {
      mockEvents = [
        {
          id: 1,
          event_type: "check_in",
          care_recipient_id: "50",
          caregiver_id: "ac3967a6-1392-4227-9987-a201e0f8f287",
          observation_event_id: null,
          timestamp: "2019-04-29T13:19:23.456Z",
          payload: {
            id: 1,
            note: "note",
            fluid: "regular",
            pad_condition: "wet",
            mood: "okay",
            severity: "low",
          },
        },
        {
          id: 2,
          event_type: "regular_medication_taken",
          care_recipient_id: "50",
          caregiver_id: "ac3967a6-1392-4227-9987-a201e0f8f287",
          observation_event_id: null,
          timestamp: "2010-01-10T18:19:23.456Z",
          payload: {
            id: 2,
            note: "note",
            fluid: "regular",
            pad_condition: "wet",
            mood: "okay",
            severity: "low",
          },
        },
      ];
    });

    it("returns the events as JSON", async () => {
      const careRecipientId = "50";
      const response = await request(app).get(`/api/events/${careRecipientId}`);
      expect(EventModel.findAll).toHaveBeenCalledWith({
        where: {
          care_recipient_id: careRecipientId,
        },
      });
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockEvents);
    });
  });
});
