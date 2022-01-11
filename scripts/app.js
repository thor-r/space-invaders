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

  const obstacleCLass3 = 'obstacle3'
  const obstacle3StartPosition = 302
  let obstacle3CurrentPosition = obstacle3StartPosition

  const obstacleClass4 = 'obstacle4'
  const obstacle4StartPosition = 284
  let obstacle4CurrentPosition = obstacle4StartPosition

  const goalClass = 'goal'
  const goalPosition = 3
  const goalCurrentPosition = goalPosition


  // making a grid --> add player and each obstacle as arguments
  function createGrid(playerStartPosition, obstacleStartPosition, obstacle2StartPosition, obstacle3StartPosition, obstacle4StartPosition, goalPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    } 
    addPlayer(playerStartPosition)
    addObstacle(obstacleStartPosition) //must add each instance of an obstacle
    addObstacle2(obstacle2StartPosition)
    addObstacle3(obstacle3StartPosition)
    addObstacle4(obstacle4StartPosition)
    addGoal(goalPosition)
  }

  // addding goal to grid
  function addGoal(position) {
    cells[position].classList.add(goalClass)
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

  function addObstacle3(position) {
    cells[position].classList.add(obstacleCLass3)
  }
  
  function addObstacle4(position) {
    cells[position].classList.add(obstacleClass4)
  }




  // removing obstacle from grid
  function removeObstacle(position) {
    cells[position].classList.remove(obstacleClass)
  }

  function removeObstacle2(position) {
    cells[position].classList.remove(obstacleClass2)
  }

  function removeObstacle3(position) {
    cells[position].classList.remove(obstacleCLass3)
  }

  function removeObstacle4(position) {
    cells[position].classList.remove(obstacleClass4)
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
    winLogic()
  }


  // moving obstacles within set interval
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

  const obstacle2Movement = setInterval(() => {
    removeObstacle2(obstacle2CurrentPosition)
    
    if (obstacle2CurrentPosition % width === 0) {
      obstacle2CurrentPosition = + 359 //added back -1 cell to prevent gaps forming
    } else {
      obstacle2CurrentPosition--
    }
    addObstacle2(obstacle2CurrentPosition)
    collision()
  }, 500)
  

  const obstacle3Movement = setInterval(() => {
    removeObstacle3(obstacle3CurrentPosition)
    
    if (obstacle3CurrentPosition % width === width - 1) {
      obstacle3CurrentPosition = + 302
    } else {
      obstacle3CurrentPosition++
    }
    addObstacle3(obstacle3CurrentPosition)
    collision()
  }, 500)

  const obstacle4Movement = setInterval(() => {
    removeObstacle4(obstacle4CurrentPosition)
    
    if (obstacle4CurrentPosition % width === width - 1) {
      obstacle4CurrentPosition = + 282
    } else {
      obstacle4CurrentPosition++
    }
    addObstacle4(obstacle4CurrentPosition)
    collision()
  }, 500)

















  // win function --> call function within player movement??
  function winLogic() {
    if (playerCurrentPosition === goalPosition) {
      removePlayer(playerCurrentPosition)
      window.alert('you won')
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    }
  }


  //  collision function call collision function within player move and every instance of obstacle move / update collision for every new obstacle
  function collision() {
    if (playerCurrentPosition === obstacleCurrentPosition || playerCurrentPosition === obstacle2CurrentPosition || playerCurrentPosition === obstacle3CurrentPosition || playerCurrentPosition === obstacle4CurrentPosition) {
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
      // window.alert('game over')
    }
  }



  




  //  event listeners
  document.addEventListener('keydown', playerMovement)

  //must add each obstacle start position 
  createGrid(playerStartPosition, obstacleStartPosition, obstacle2StartPosition, obstacle3StartPosition, obstacle4StartPosition, goalPosition)
}

window.addEventListener('DOMContentLoaded', init)