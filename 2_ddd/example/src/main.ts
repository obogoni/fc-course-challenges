import Customer from "./domain/customer/customer";
import Address from "./domain/customer/address";
import OrderItem from "./domain/order/order_item";
import Order from "./domain/order/order";

let customer = new Customer("1", "Otávio");

let address = new Address("Rua E", 1, "27250100", "Volta Redonda");

customer.setAddress(address);
customer.activate();

let item1 = new OrderItem("1", "Item 1", 15);
let item2 = new OrderItem("2", "Item 2", 10);

const order = new Order("1", "1", [item1, item2]);
