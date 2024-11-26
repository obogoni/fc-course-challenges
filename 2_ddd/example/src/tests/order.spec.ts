import Order from "../domain/order/order"
import OrderItem from "../domain/order/order_item";

describe("Order test suites", () => {

  it("should throw error when id is empty", () => {

    expect(() => {

      const order = new Order("", "1", []);

    }).toThrowError("Id is required")

  });

  it("should throw error when customer name is empty", () => {

    expect(() => {

      const order = new Order("1", "", []);

    }).toThrowError("Customer id is required")
  });


  it("should throw error when items are empty", () => {

    expect(() => {

      const order = new Order("1", "1", []);

    }).toThrowError("Order items are required");
  });

  it("should throw error when item quantity is not bigger than zero", () => {

    expect(() => {

      const item = new OrderItem("1", "1", "Pastel", 0, 10);

    }).toThrowError("Quantity is required");
  });

  it("should throw error when items are empty", () => {

    //Arrange
    const item1 = new OrderItem("1", "1", "Pastel", 2, 10);
    const item2 = new OrderItem("2", "2", "Caldo de cana", 1, 8);
    const order = new Order("1", "1", [item1, item2]);

    //Act
    const total = order.getTotal();

    //Assert
    expect(total).toBe(28);
  });

}); 
