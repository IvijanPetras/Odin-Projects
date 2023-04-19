const ships = require('../ship')

describe("CreateShip", () => {
    const battleship = ships.CreateShip(3)
    battleship.hit()
    it("should create a new ship with the given length number", () => {
      expect(battleship.getLength()).toBe(3)
    }),
    it("should add 1 hit point on hit() function", () => {
      expect(battleship.hitCount).toBe(1)
    }),
    it("should return TRUE if hitcount is equal to lehgth", () => {
        battleship.hit()
        battleship.hit()
        expect(battleship.isSunk()).toBe(true)
    }),
    it("should return FALSE if hitcount is NOT equal to lehgth", () => {
        battleship.hit()
        expect(battleship.isSunk()).toBe(false)
    })
  })