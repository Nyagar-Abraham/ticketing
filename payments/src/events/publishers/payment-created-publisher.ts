import {
  PaymentCreatedEvent,
  Publisher,
  Subjects,
} from "@abraham-org-tickets/common";

export class PaymentcreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
