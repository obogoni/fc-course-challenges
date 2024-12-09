import Address from "./address"

export default class Customer {
  private _id: string;
  private _name: string;
  private _address!: Address;
  private _active: boolean = true;
  private _rewardPoints: number = 0;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;

    this.validate();
  }

  validate() {

    if (this._name.length === 0) {
      throw new Error("Name is required");
    }

    if (this._id.length === 0) {
      throw new Error("Id is required");
    }
  }

  getId(): string {
    return this._id;
  }

  changeName(name: string) {
    this._name = name;
  }

  getName() {
    return this._name;
  }
  activate() {
    if (this._address === undefined) {
      throw new Error("Address is mandatory to activate user");
    }

    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  isActive() {
    return this._active;
  }

  setAddress(address: Address) {
    this._address = address;
  }

  addRewardPoints(points: number): void {
    this._rewardPoints += points;
  }

  getRewardPoints(): number {
    return this._rewardPoints;
  }

}
