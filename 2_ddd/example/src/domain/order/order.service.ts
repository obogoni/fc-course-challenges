import Customer from "../customer/customer";
import Order from "./order";
import OrderItem from "./order_item";
import { v4 as uuid } from "uuid";

export default class OrderService {
  static getTotal(orders: Order[]): number {
    return orders.reduce((acc, item) => acc + item.getTotal(), 0);
  }

  static placeOrder(customer: Customer, items: OrderItem[]): Order {
    const order = new Order(uuid(), customer.getId(), items);

    customer.addRewardPoints(order.getTotal() / 2);

    return order;
  }
}
