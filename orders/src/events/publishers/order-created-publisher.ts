import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from "@abraham-org-tickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
