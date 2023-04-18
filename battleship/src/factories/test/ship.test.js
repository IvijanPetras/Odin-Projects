const ships = require('../ship')

describe("CreateShip", () => {
    it("should create a new ship with the given length number", () => {
      const battleship = ships.CreateShip(3);
      expect(battleship.getLength()).toBe(3);
    });
  });