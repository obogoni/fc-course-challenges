import Order from "./order";
import OrderItem from "./order_item";
import OrderService from "./order.service";
import Customer from "../customer/customer";

describe("Order service unit tests", () => {

  it("should place an order", () => {

    const customer = new Customer("customer 1", "João");
    const item1 = new OrderItem("item 1", "product 1", "Pastel", 1, 10);

    const order = OrderService.placeOrder(customer, [item1]);

    expect(customer.getRewardPoints()).toBe(5);
    expect(order.getTotal()).toBe(10);

  });

  it("should get total of all orders", () => {

    //Arrange
    const item1 = new OrderItem("1", "1", "Pastel", 1, 10);
    const item2 = new OrderItem("2", "2", "Bolo", 2, 50);

    const order1 = new Order("1", "1", [item1]);
    const order2 = new Order("2", "2", [item2]);

    //Act
    const total = OrderService.getTotal([order1, order2]);

    //Assert
    expect(total).toBe(110);

  });
});
