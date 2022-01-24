// const { jest, expect } = require('@jest/globals')
const Player = require('../lib/Player.js')
const Potion= require('../lib/Potion')
jest.mock=('../lib/Potion.js')

console.log(new Potion())

test('creates a Player object', () => {
    const player = new Player('Rhea')
    expect(player.name).toBe('Rhea')
    expect(player.health).toEqual(expect.any(Number))
    expect(player.strength).toEqual(expect.any(Number))
    expect(player.agility).toEqual(expect.any(Number))
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]))
})