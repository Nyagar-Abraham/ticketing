import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@abraham-org-tickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
