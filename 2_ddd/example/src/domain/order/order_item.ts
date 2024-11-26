export default class OrderItem {

  private _id: string;
  private _productId: string;
  private _name: string;
  private _quantity: number;
  private _price: number;

  constructor(id: string, productId: string, name: string, quantity: number, price: number) {
    this._id = id;
    this._productId = productId;
    this._name = name;
    this._quantity = quantity;
    this._price = price;

    this.validate();
  }

  validate() {
    if (this._id.length === 0) throw new Error("Id is required");
    if (this._productId.length === 0) throw new Error("Product id is required");
    if (this._quantity < 1) throw new Error("Quantity is required");
  }

  getPrice(): number {
    return this._price;
  }

  getTotal(): number {
    return this._price * this._quantity;
  }
}
