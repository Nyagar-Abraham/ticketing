import {
  Publisher,
  ExpirationCompleteEvent,
  Subjects,
} from "@abraham-org-tickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
