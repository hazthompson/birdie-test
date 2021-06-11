interface EventPayload {
  id: number;
  note: string;
  fluid: string;
  pad_condition: string;
  mood: string;
  severity: string;
  meal: string;
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

export type { EventModelInterface, ParamTypes };
