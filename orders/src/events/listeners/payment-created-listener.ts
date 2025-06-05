import {
  Listner,
  OrderStatus,
  PaymentCreatedEvent,
  Subjects,
} from "@abraham-org-tickets/common";
import { Message } from "node-nats-streaming";
import { queueGroupName } from "./queue-group-name";
import { Order } from "../../models/order";

export class PaymentCreatedListener extends Listner<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
  queueGroupName: string = queueGroupName;

  async onMessage(data: PaymentCreatedEvent["data"], msg: Message) {
    const order = await Order.findById(data.orderId);

    if (!order) {
      throw new Error("Order not found");
    }

    order?.set({
      status: OrderStatus.Complete,
    });
    await order.save();

    msg.ack();
  }
}
