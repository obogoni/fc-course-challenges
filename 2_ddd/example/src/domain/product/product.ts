export default class Product {
  private _id: string;
  private _name: string;
  private _price: number;

  constructor(id: string, name: string, price: number) {
    this._id = id;
    this._name = name;
    this._price = price;

    this.validate();
  }

  validate() {
    if (this._id.length === 0) throw new Error("Id is required");
    if (this._name.length === 0) throw new Error("Name is required");
    if (this._price < 0) throw new Error("Price is required");
  }

  getName(): string {
    return this._name;
  }

  changeName(name: string) {
    this._name = name;
  }

  getPrice(): number {
    return this._price;
  }

  changePrice(price: number): void {
    this._price = price;
  }
}

