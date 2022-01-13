function init() {
  // variables 
  const grid = document.querySelector('.grid')
  const audio = document.querySelector('#audio')

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

  // death star variables 
  const starClass1 = 'star1'
  const starPosition1 = 0

  const starClass2 = 'star2'
  const starPosition2 = 1

  const starClass3 = 'star3'
  const starPosition3 = 2

  const starClass4 = 'star4'
  const starPosition4 = 3

  const starClass5 = 'star5'
  const starPosition5 = 20

  const starClass6 = 'star6'
  const starPosition6 = 21

  const starClass7 = 'star7'
  const starPosition7 = 22

  const starClass8 = 'star8'
  const starPosition8 = 23

  const starClass9 = 'star9'
  const starPosition9 = 40

  const starClass10 = 'star10'
  const starPosition10 = 41

  const starClass11 = 'star11'
  const starPosition11 = 42

  const starClass12 = 'star12'
  const starPosition12 = 43

  const starClass13 = 'star13'
  const starPosition13 = 60

  const starClass14 = 'star14'
  const starPosition14 = 61

  const starClass15 = 'star15'
  const starPosition15 = 62

  const starClass16 = 'star16'
  const starPosition16 = 63

  // trying to make laser work 
  const laserClass = 'laser'
  let laserPosition = obstacle3CurrentPosition
  let laserCurrentPosition = laserPosition
  let laserNewPosition

  function addLaser(position) {
    cells[position].classList.add(laserClass)
  }

  function removeLaser(position) {
    cells[position].classList.remove(laserClass)
  }


  // making a grid --> add player and each obstacle as arguments
  function createGrid(playerStartPosition, obstacleStartPosition, obstacle2StartPosition, obstacle3StartPosition, obstacle4StartPosition, starPosition1, starPosition2, starPosition3, starPosition4, starPosition5, starPosition6, starPosition7, starPosition8, starPosition9, starPosition10, starPosition11, starPosition12, starPosition13, starPosition14, starPosition15, starPosition16) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)

    }
    //must add each instance of an obstacle
    addPlayer(playerStartPosition)
    addObstacle(obstacleStartPosition)
    addObstacle2(obstacle2StartPosition)
    addObstacle3(obstacle3StartPosition)
    addObstacle4(obstacle4StartPosition)
    // calling each instance of addStar
    addStar1(starPosition1)
    addStar2(starPosition2)
    addStar3(starPosition3)
    addStar4(starPosition4)
    addStar5(starPosition5)
    addStar6(starPosition6)
    addStar7(starPosition7)
    addStar8(starPosition8)
    addStar9(starPosition9)
    addStar10(starPosition10)
    addStar11(starPosition11)
    addStar12(starPosition12)
    addStar13(starPosition13)
    addStar14(starPosition14)
    addStar15(starPosition15)
    addStar16(starPosition16)
  }

  // addding death star to grid
  function addStar1(position) {
    cells[position].classList.add(starClass1)
  }

  function addStar2(position) {
    cells[position].classList.add(starClass2)
  }

  function addStar3(position) {
    cells[position].classList.add(starClass3)
  }

  function addStar4(position) {
    cells[position].classList.add(starClass4)
  }

  function addStar5(position) {
    cells[position].classList.add(starClass5)
  }

  function addStar6(position) {
    cells[position].classList.add(starClass6)
  }

  function addStar7(position) {
    cells[position].classList.add(starClass7)
  }

  function addStar8(position) {
    cells[position].classList.add(starClass8)
  }

  function addStar9(position) {
    cells[position].classList.add(starClass9)
  }

  function addStar10(position) {
    cells[position].classList.add(starClass10)
  }

  function addStar11(position) {
    cells[position].classList.add(starClass11)
  }

  function addStar12(position) {
    cells[position].classList.add(starClass12)
  }

  function addStar13(position) {
    cells[position].classList.add(starClass13)
  }

  function addStar14(position) {
    cells[position].classList.add(starClass14)
  }

  function addStar15(position) {
    cells[position].classList.add(starClass15)
  }

  function addStar16(position) {
    cells[position].classList.add(starClass16)
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
      playerCurrentPosition++
      playerSound()
    } else if (key === left && playerCurrentPosition % width !== 0) {
      playerCurrentPosition--
      playerSound()
    } else if (key === up && playerCurrentPosition >= width) {
      playerCurrentPosition -= width
      playerSoundForward()
    } else if (key === down && playerCurrentPosition + width <= cellCount - 1) {
      playerCurrentPosition += width
      playerSoundBack()
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
      obstacleCurrentPosition += 19
    } else {
      obstacleCurrentPosition--
    }
    addObstacle(obstacleCurrentPosition)
    collision()

  }, 500)

  const obstacle2Movement = setInterval(() => {
    removeObstacle2(obstacle2CurrentPosition)

    if (obstacle2CurrentPosition % width === 0) {
      obstacle2CurrentPosition += 19 //added back -1 cell to prevent gaps forming
    } else {
      obstacle2CurrentPosition--
    }
    addObstacle2(obstacle2CurrentPosition)
    collision()
  }, 500)


  const obstacle3Movement = setInterval(() => {
    removeObstacle3(obstacle3CurrentPosition)

    if (obstacle3CurrentPosition % width === width - 1) {
      obstacle3CurrentPosition -= 19
    } else {
      obstacle3CurrentPosition++
    }
    addObstacle3(obstacle3CurrentPosition)
    collision()
  }, 500)

  const obstacle4Movement = setInterval(() => {
    removeObstacle4(obstacle4CurrentPosition)

    if (obstacle4CurrentPosition % width === width - 1) {
      obstacle4CurrentPosition -= 19
    } else {
      obstacle4CurrentPosition++
    }
    addObstacle4(obstacle4CurrentPosition)
    collision()
  }, 500)


  // laser shooting functions
  // let count = 0


  // const obstacleShoot = setInterval(() => {
  //   // removeLaser(laserPosition)
  //   // laserPosition = laserCurrentPosition -= 20
  //   // addLaser(laserCurrentPosition)
  //   shootLaser()
  // }, 500)


  // function shootLaser() {
  //   count++
  //   if (count > 10) {
  //     clearInterval()
  //     removeLaser(laserCurrentPosition)
    
  //   } else {
  //     shootAgain()
  //   }
  // }

  // // if (laserCurrentPosition <= width) {
  // //   removeLaser(laserCurrentPosition)

  // function shootAgain() {
  //   removeLaser(laserPosition)
  //   laserPosition = laserCurrentPosition -= 20
  //   addLaser(laserCurrentPosition)

  // }















  // ^laser shooting trail and error^











  // win function --> call function within player movement??
  function winLogic() {
    if (playerCurrentPosition === starPosition1 || playerCurrentPosition === starPosition4 || playerCurrentPosition === starPosition8 || playerCurrentPosition === starPosition12 || playerCurrentPosition === starPosition13 || playerCurrentPosition === starPosition14 || playerCurrentPosition === starPosition15 || playerCurrentPosition === starPosition16) {
      removePlayer(playerCurrentPosition)
      // window.alert('you won')
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
      YodaLaugh()
    }
  }


  //  collision function call collision function within player move and every instance of obstacle move / update collision for every new obstacle
  function collision() {
    if (playerCurrentPosition === obstacleCurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition

    } else if (playerCurrentPosition === obstacle2CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition

    } else if (playerCurrentPosition === obstacle3CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition

    } else if (playerCurrentPosition === obstacle4CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition

    }
  }





  //player movement sounds 
  function playerSound() {
    audio.src = 'sounds/mil2.wav'
    audio.play()
  }

  function playerSoundBack() {
    audio.src = 'sounds/back.wav'
    audio.play()
  }

  function playerSoundForward() {
    audio.src = 'sounds/forward2.wav'
    audio.play()
  }

  // collision sounds
  function collisionSoundChewy() {
    audio.src = 'sounds/chewyR2D2.wav'
    audio.play()
  }

  // win sounds 
  function YodaLaugh() {
    audio.src = 'sounds/YODA3.wav'
    audio.play()
  }





  //  event listeners
  document.addEventListener('keydown', playerMovement)

  //must add each obstacle start position 
  createGrid(playerStartPosition, obstacleStartPosition, obstacle2StartPosition, obstacle3StartPosition, obstacle4StartPosition, starPosition1, starPosition2, starPosition3, starPosition4, starPosition5, starPosition6, starPosition7, starPosition8, starPosition9, starPosition10, starPosition11, starPosition12, starPosition13, starPosition14, starPosition15, starPosition16)
}


window.addEventListener('DOMContentLoaded', init)