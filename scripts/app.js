function init() {
  // variables so far
  const grid = document.querySelector('.grid')

  const width = 20
  const cellCount = width * width
  const cells = []

  const playerClass = 'player'
  const playerStartPosition = 389
  let playerCurrentPosition = playerStartPosition

  const obstacleClass = 'obstacle'
  const obstacleStartPosition = 359
  let obstacleCurrentPosition = obstacleStartPosition

  // making a grid
  function createGrid(playerStartPosition, obstacleStartPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addPlayer(playerStartPosition)
    addObstacle(obstacleStartPosition)
  }

  // adding player to grid
  function addPlayer(position) {
    console.log(cells[position])
    cells[position].classList.add(playerClass)
  }

  // removing player from grid
  function removePlayer(position) {
    cells[position].classList.remove(playerClass)
  }

  // adding obstacles to grid
  function addObstacle(position) {
    console.log(cells[position])
    cells[position].classList.add(obstacleClass)
  }

  // removing obstacle from grid
  function removeObstacle(position) {
    cells[position].classList.remove(obstacleClass)
  }

  // move player
  function playerMovement(event) {
    const key = event.keyCode
    const left = 65
    const right = 68
    const up = 87
    const down = 83
    console.log('postion before redefining --->', playerCurrentPosition)
    removePlayer(playerCurrentPosition)

    if (key === right && playerCurrentPosition % width !== width - 1) {
      playerCurrentPosition++   //moving right = current postion plus 1
    } else if (key === left && playerCurrentPosition % width !== 0) {
      playerCurrentPosition--
    } else if (key === up && playerCurrentPosition >= width) {
      playerCurrentPosition -= width
    } else if (key === down && playerCurrentPosition + width <= cellCount - 1) {
      playerCurrentPosition += width
    }

    console.log('positon after redefining --->', playerCurrentPosition)

    addPlayer(playerCurrentPosition)
  }

  function moveObstacle(event) {
    removeObstacle(obstacleCurrentPosition)
    
  }

















  document.addEventListener('keydown', playerMovement)

  createGrid(playerStartPosition, obstacleStartPosition)
}

window.addEventListener('DOMContentLoaded', init)