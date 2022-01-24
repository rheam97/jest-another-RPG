// const { jest, expect } = require('@jest/globals')
const { expect } = require('@jest/globals')
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

test('get players stats as an object', ()=> {

    const player = new Player('Rhea')
    expect(player.getStats()).toHaveProperty('potions')
    expect(player.getStats()).toHaveProperty('health')
    expect(player.getStats()).toHaveProperty('strength')
    expect(player.getStats()).toHaveProperty('agility')
})

test('gets inventory from player or returns false', () => {
    const player = new Player('Rhea')
    expect(player.getInventory()).toEqual(expect.any(Array))

    player.inventory=[]
    expect(player.getInventory()).toEqual(false)
})