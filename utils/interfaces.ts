interface EventModelInterface {
  id: number;
  event_type: string | null;
  care_recipient_id: string | null;
  alert_id: string | null;
  task_instance_id: string | null;
  visit_id: string | null;
  caregiver_id: string | null;
  rejected_event_id: string | null;
  observation_event_id: string | null;
  timestamp: string | null;
}

interface ParamTypes {
  careRecipientId: string;
}

export { EventModelInterface, ParamTypes };
