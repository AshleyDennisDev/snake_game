import { update as updateSnake, draw as drawSnake, SNAKE_SPEED} from './snake.js'
import { update as udateFood, draw as drawFood} from './food.js'
let lastRenderTime = 0
const gameBoard = document.getElementById('game-board.js')

function main(currentTime) {
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED)
    return

    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}