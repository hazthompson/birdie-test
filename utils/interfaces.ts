interface EventPayload {
  id: number;
  note: string;
  fluid: string;
  pad_condition: string;
  mood: string;
  severity: string;
}

interface EventModelInterface {
  id: number;
  event_type: string | null;
  care_recipient_id: string | null;
  caregiver_id: string | null;
  observation_event_id: string | null;
  timestamp: string | null;
  payload: EventPayload;
}

interface ParamTypes {
  careRecipientId: string;
}

interface EventsByEventType {
  [key: string]: EventModelInterface[];
}

export { EventModelInterface, ParamTypes, EventsByEventType };
