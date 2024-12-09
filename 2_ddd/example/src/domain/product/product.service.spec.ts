import Product from "./product"
import { ProductService } from "./product.service";

describe("Product service unit tests", () => {

  it("should change the price of all products", () => {

    const product1 = new Product("1", "Pastel", 8);
    const product2 = new Product("2", "Bolo", 5);
    const product3 = new Product("3", "Coca", 5);

    ProductService.increasePrice([product1, product2, product3], 100);

    expect(product1.getPrice()).toBe(16);
    expect(product2.getPrice()).toBe(10);
    expect(product3.getPrice()).toBe(10);

  });
});
