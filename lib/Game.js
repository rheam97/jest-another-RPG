const inquirer = require('inquirer')
const Player = require('./Player')
const Enemy = require('./Enemy')

function Game() {
    this.roundNumber = 0
    this.isPlayerTurn = false
    this.enemies = []
    this.currentEnemy;
    this.player;
}

Game.prototype.initializeGame = function () {
    this.enemies.push(new Enemy('goblin', 'sword'))
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));

    this.currentEnemy= this.enemies[0]

    inquirer.prompt({
        type: 'text',
        name: 'username',
        message: 'What is your name?'
    }).then(({username}) => {
        this.player= new Player(username)
    this.startNewBattle()
    })
}
module.exports = Game