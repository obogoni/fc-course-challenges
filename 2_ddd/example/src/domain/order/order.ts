import OrderItem from "./order_item"

export default class Order {
  _id: string;
  _customerId: string;
  _items: OrderItem[] = [];

  constructor(id: string, customerId: string, items: OrderItem[]) {

    this._id = id;
    this._customerId = customerId;
    this._items = items;

    this.validate();
  }

  validate() {
    if (this._id.length === 0) throw new Error("Id is required");
    if (this._customerId.length === 0) throw new Error("Customer id is required");
    if (this._items.length === 0) throw new Error("Order items are required");
  }

  getTotal(): number {
    return this._items.reduce((acc, item) => acc + item.getTotal(), 0);
  }
}
