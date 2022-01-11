function init() {
  // variables 
  const grid = document.querySelector('.grid')

  const width = 20
  const cellCount = width * width
  const cells = []
  // player variables
  const playerClass = 'player'
  const playerStartPosition = 389
  let playerCurrentPosition = playerStartPosition
  // obstacle variables
  const obstacleClass = 'obstacle'
  const obstacleStartPosition = 339
  let obstacleCurrentPosition = obstacleStartPosition

  const obstacleClass2 = 'obstacle2'
  const obstacle2StartPosition = 358
  let obstacle2CurrentPosition = obstacle2StartPosition



  // making a grid
  function createGrid(playerStartPosition, obstacleStartPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addPlayer(playerStartPosition)
    addObstacle(obstacleStartPosition) //must add each instance of an obstacle
    addObstacle2(obstacle2StartPosition)
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

  function addObstacle2(position) {
    cells[position].classList.add(obstacleClass2)
  }

  




  // removing obstacle from grid
  function removeObstacle(position) {
    cells[position].classList.remove(obstacleClass)
  }

  function removeObstacle2(position) {
    cells[position.classList.remove(obstacleClass2)]
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
    collision()
  }


  // moving obstacle within set interval
  const obstacleMovement = setInterval(() => {
    console.log('This logs every second')
    removeObstacle(obstacleCurrentPosition)

    if (obstacleCurrentPosition % width === 0) {
      obstacleCurrentPosition = + 339
    } else {
      obstacleCurrentPosition--
    }
    addObstacle(obstacleCurrentPosition)
    collision()
  
  }, 500)

  





































  //  collision function call collision function within player move and every instance of obstacle move
  function collision() {
    if (playerCurrentPosition === obstacleCurrentPosition) {
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
      // window.alert('game over')
    }
  }



  // win function --> call function within player movement??




  //  event listeners
  document.addEventListener('keydown', playerMovement)

  createGrid(playerStartPosition, obstacleStartPosition)
}

window.addEventListener('DOMContentLoaded', init)