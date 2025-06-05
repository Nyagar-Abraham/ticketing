import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from "@abraham-org-tickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
