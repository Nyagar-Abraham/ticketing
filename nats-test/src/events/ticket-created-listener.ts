import { Message } from "node-nats-streaming";
import { Listner } from "../../../common/src/events/base-listener";
import { TicketCreatedEvent } from "../../../common/src/events/ticket-created-event";
import { Subjects } from "../../../common/src/events/subjects";

export class TicketCreatedListener extends Listner<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName = "payments-service";

  onMessage(data: TicketCreatedEvent["data"], msg: Message) {
    console.log("Ticket created event data:", data);
    // Process the ticket creation event
    data;
    msg.ack();
  }
}
