import Product from "../domain/product/product";

describe("Product unit tests", () => {

  it("should throw error when product id is empty", () => {
    expect(() => {
      const product = new Product("", "Pastel", 10);
    }).toThrowError("Id is required");
  });

  it("should throw error when product name is empty", () => {
    expect(() => {

      const product = new Product("1", "", 10);

    }).toThrowError("Name is required")
  });

  it("should throw error when product price is less than zero", () => {

    expect(() => {

      const product = new Product("1", "Pastel", -1);

    }).toThrowError("Price is required")
  });


  it("should change name", () => {

    const product = new Product("1", "Pastel", 10);

    product.changeName("Bolo");

    expect(product.getName()).toBe("Bolo");

  });

});
