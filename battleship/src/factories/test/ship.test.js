import { CreateShip } from "../ship"
it("should create new ship with given length number ", () => {
    const battleship =  CreateShip(3)
    expect(battleship.getLength()).toBe(3)
})