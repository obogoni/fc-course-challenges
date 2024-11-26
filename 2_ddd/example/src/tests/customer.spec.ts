import Address from "../domain/customer/address";
import Customer from "../domain/customer/customer"

describe("Customer unit tests", () => {

  it("should throw error when customer id is empty", () => {
    expect(() => {
      const customer = new Customer("", "Otávio");
    }).toThrowError("Id is required")
  });

  it("should throw error when customer name is empty", () => {
    expect(() => {
      const customer = new Customer("1", "");
    }).toThrowError("Name is required")
  });

  it("should change name", () => {

    const customer = new Customer("1", "João");

    customer.changeName("José");

    expect(customer.getName()).toBe("José");
  });

  it("should throw error when activating customer without address", () => {

    //Arrange
    const customer = new Customer("1", "João");

    //Assert
    expect(() => {

      //Act
      customer.activate();

    }).toThrowError("Address is mandatory to activate user");
  });

  it("should activate customer", () => {

    //Arrange
    const customer = new Customer("1", "João");
    const address = new Address("Rua 1", 1, "12345-678", "Volta Redonda");

    customer.setAddress(address);

    //Act
    customer.activate()

    //Assert
    expect(customer.isActive()).toBe(true);
  });
});
