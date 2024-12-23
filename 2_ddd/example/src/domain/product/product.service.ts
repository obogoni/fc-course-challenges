import Product from "./product";

export class ProductService {
  static increasePrice(products: Product[], percentage: number): void {
    products.forEach(product => {
      product.changePrice((product.getPrice() * percentage) / 100 + product.getPrice());
    })
  }
}
