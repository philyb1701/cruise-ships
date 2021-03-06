const Ship = require("../src/Ship.js");

describe("Ship", () => {
  it("can be instantiated", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  it("has a startingPort", () => {
    const ship = new Ship("Dover");

    expect(ship.startingPort).toBe("Dover");
  });
});
