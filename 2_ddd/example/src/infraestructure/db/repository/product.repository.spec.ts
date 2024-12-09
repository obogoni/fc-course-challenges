import { Sequelize } from "sequelize-typescript";

describe("Product repository tests", () => {

  let sequelize: Sequelize;

  beforeEach(async () => {

    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true }
    })
  });

  afterEach(async () => {

    sequelize.close();

  });

});
