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
  const obstacle3StartPosition = 334
  let obstacle3CurrentPosition = obstacle3StartPosition

  const obstacleClass4 = 'obstacle4'
  const obstacle4StartPosition = 353
  let obstacle4CurrentPosition = obstacle4StartPosition

  const obstacleClass5 = 'obstacle5'
  const obstacle5StartPosition = 330
  let obstacle5CurrentPosition = obstacle5StartPosition

  const obstacleClass6 = 'obstacle6'
  const obstacle6StartPosition = 349
  let obstacle6CurrentPosition = obstacle6StartPosition

  const obstacleClass7 = 'obstacle7'
  const obstacle7StartPosition = 280
  let obstacle7CurrentPosition = obstacle7StartPosition

  const obstacleClass8 = 'obstacle8'
  const obstacle8StartPosition = 301
  let obstacle8CurrentPosition = obstacle8StartPosition

  const obstacleClass9 = 'obstacle9'
  const obstacle9StartPosition = 284
  let obstacle9CurrentPosition = obstacle9StartPosition

  const obstacleClass10 = 'obstacle10'
  const obstacle10StartPosition = 305
  let obstacle10CurrentPosition = obstacle10StartPosition

  const obstacleClass11 = 'obstacle11'
  const obstacle11StartPosition = 288
  let obstacle11CurrentPosition = obstacle11StartPosition

  const obstacleClass12 = 'obstacle12'
  const obstacle12StartPosition = 309
  let obstacle12CurrentPosition = obstacle12StartPosition

  const obstacleClass13 = 'obstacle13'
  const obstacle13StartPosition = 259
  let obstacle13CurrentPosition = obstacle13StartPosition

  const obstacleClass14 = 'obstacle14'
  const obstacle14StartPosition = 278
  let obstacle14CurrentPosition = obstacle14StartPosition

  const obstacleClass15 = 'obstacle15'
  const obstacle15StartPosition = 255
  let obstacle15CurrentPosition = obstacle15StartPosition

  const obstacleClass16 = 'obstacle16'
  const obstacle16StartPosition = 274
  let obstacle16CurrentPosition = obstacle16StartPosition

  const obstacleClass17 = 'obstacle17'
  const obstacle17StartPosition = 251
  let obstacle17CurrentPosition = obstacle17StartPosition

  const obstacleClass18 = 'obstacle18'
  const obstacle18StartPosition = 270
  let obstacle18CurrentPosition = obstacle18StartPosition

  const obstacleClass19 = 'obstacle19'
  const obstacle19StartPosition = 200
  let obstacle19CurrentPosition = obstacle19StartPosition

  const obstacleClass20 = 'obstacle20'
  const obstacle20StartPosition = 221
  let obstacle20CurrentPosition = obstacle20StartPosition

  const obstacleClass21 = 'obstacle21'
  const obstacle21StartPosition = 206
  let obstacle21CurrentPosition = obstacle21StartPosition

  const obstacleClass22 = 'obstacle22'
  const obstacle22StartPosition = 227
  let obstacle22CurrentPosition = obstacle22StartPosition

  const obstacleClass23 = 'obstacle23'
  const obstacle23StartPosition = 212
  let obstacle23CurrentPosition = obstacle23StartPosition

  const obstacleClass24 = 'obstacle24'
  const obstacle24StartPosition = 233
  let obstacle24CurrentPosition = obstacle24StartPosition

  const obstacleClass25 = 'obstacle25'
  const obstacle25StartPosition = 179
  let obstacle25CurrentPosition = obstacle25StartPosition

  const obstacleClass26 = 'obstacle26'
  const obstacle26StartPosition = 198
  let obstacle26CurrentPosition = obstacle26StartPosition

  const obstacleClass27 = 'obstacle27'
  const obstacle27StartPosition = 173
  let obstacle27CurrentPosition = obstacle27StartPosition

  const obstacleClass28 = 'obstacle28'
  const obstacle28StartPosition = 192
  let obstacle28CurrentPosition = obstacle28StartPosition

  const obstacleClass29 = 'obstacle29'
  const obstacle29StartPosition = 166
  let obstacle29CurrentPosition = obstacle29StartPosition

  const obstacleClass30 = 'obstacle30'
  const obstacle30StartPosition = 185
  let obstacle30CurrentPosition = obstacle30StartPosition

  const obstacleClass31 = 'obstacle31'
  const obstacle31StartPosition = 120
  let obstacle31CurrentPosition = obstacle31StartPosition

  const obstacleClass32 = 'obstacle32'
  const obstacle32StartPosition = 141
  let obstacle32CurrentPosition = obstacle32StartPosition

  const obstacleClass33 = 'obstacle33'
  const obstacle33StartPosition = 128
  let obstacle33CurrentPosition = obstacle33StartPosition

  const obstacleClass34 = 'obstacle34'
  const obstacle34StartPosition = 150
  let obstacle34CurrentPosition = obstacle34StartPosition

  const obstacleClass35 = 'obstacle35'
  const obstacle35StartPosition = 135
  let obstacle35CurrentPosition = obstacle35StartPosition

  const obstacleClass36 = 'obstacle36'
  const obstacle36StartPosition = 156
  let obstacle36CurrentPosition = obstacle36StartPosition


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
  function createGrid(playerStartPosition, obstacleStartPosition, obstacle2StartPosition, obstacle3StartPosition, obstacle4StartPosition, starPosition1, starPosition2, starPosition3, starPosition4, starPosition5, starPosition6, starPosition7, starPosition8, starPosition9, starPosition10, starPosition11, starPosition12, starPosition13, starPosition14, starPosition15, starPosition16, obstacle5StartPosition, obstacle6StartPosition, obstacle7StartPosition, obstacle8StartPosition, obstacle9StartPosition, obstacle10StartPosition, obstacle11StartPosition, obstacle12StartPosition, obstacle13StartPosition, obstacle14StartPosition, obstacle15StartPosition, obstacle16StartPosition, obstacle17StartPosition, obstacle18StartPosition, obstacle19StartPosition, obstacle20StartPosition, obstacle21StartPosition, obstacle22StartPosition, obstacle23StartPosition, obstacle24StartPosition, obstacle25StartPosition, obstacle26StartPosition, obstacle27StartPosition, obstacle28StartPosition, obstacle29StartPosition, obstacle30StartPosition, obstacle31StartPosition, obstacle32StartPosition, obstacle33StartPosition, obstacle34StartPosition, obstacle35StartPosition, obstacle36StartPosition) {
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
    addObstacle5(obstacle5StartPosition)
    addObstacle6(obstacle6StartPosition)
    addObstacle7(obstacle7StartPosition)
    addObstacle8(obstacle8StartPosition)
    addObstacle9(obstacle9StartPosition)
    addObstacle10(obstacle10StartPosition)
    addObstacle11(obstacle11StartPosition)
    addObstacle12(obstacle12StartPosition)
    addObstacle13(obstacle13StartPosition)
    addObstacle14(obstacle14StartPosition)
    addObstacle15(obstacle15StartPosition)
    addObstacle16(obstacle16StartPosition)
    addObstacle17(obstacle17StartPosition)
    addObstacle18(obstacle18StartPosition)
    addObstacle19(obstacle19StartPosition)
    addObstacle20(obstacle20StartPosition)
    addObstacle21(obstacle21StartPosition)
    addObstacle22(obstacle22StartPosition)
    addObstacle23(obstacle23StartPosition)
    addObstacle24(obstacle24StartPosition)
    addObstacle25(obstacle25StartPosition)
    addObstacle26(obstacle26StartPosition)
    addObstacle27(obstacle27StartPosition)
    addObstacle28(obstacle28StartPosition)
    addObstacle29(obstacle29StartPosition)
    addObstacle30(obstacle30StartPosition)
    addObstacle31(obstacle31StartPosition)
    addObstacle32(obstacle32StartPosition)
    addObstacle33(obstacle33StartPosition)
    addObstacle34(obstacle34StartPosition)
    addObstacle35(obstacle35StartPosition)
    addObstacle36(obstacle36StartPosition)

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


  // adding and removing player from grid
  function addPlayer(position) {
    console.log(cells[position])
    cells[position].classList.add(playerClass)
  }

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

  function addObstacle5(position) {
    cells[position].classList.add(obstacleClass5)
  }

  function addObstacle6(position) {
    cells[position].classList.add(obstacleClass6)
  }

  function addObstacle7(position) {
    cells[position].classList.add(obstacleClass7)
  }

  function addObstacle8(position) {
    cells[position].classList.add(obstacleClass8)
  }

  function addObstacle9(position) {
    cells[position].classList.add(obstacleClass9)
  }

  function addObstacle10(position) {
    cells[position].classList.add(obstacleClass10)
  }

  function addObstacle11(position) {
    cells[position].classList.add(obstacleClass11)
  }

  function addObstacle12(position) {
    cells[position].classList.add(obstacleClass12)
  }

  function addObstacle13(position) {
    cells[position].classList.add(obstacleClass13)
  }

  function addObstacle14(position) {
    cells[position].classList.add(obstacleClass14)
  }

  function addObstacle15(position) {
    cells[position].classList.add(obstacleClass15)
  }

  function addObstacle16(position) {
    cells[position].classList.add(obstacleClass16)
  }

  function addObstacle17(position) {
    cells[position].classList.add(obstacleClass17)
  }

  function addObstacle18(position) {
    cells[position].classList.add(obstacleClass18)
  }

  function addObstacle19(position) {
    cells[position].classList.add(obstacleClass19)
  }

  function addObstacle20(position) {
    cells[position].classList.add(obstacleClass20)
  }

  function addObstacle21(position) {
    cells[position].classList.add(obstacleClass21)
  }

  function addObstacle22(position) {
    cells[position].classList.add(obstacleClass22)
  }

  function addObstacle23(position) {
    cells[position].classList.add(obstacleClass23)
  }

  function addObstacle24(position) {
    cells[position].classList.add(obstacleClass24)
  }

  function addObstacle25(position) {
    cells[position].classList.add(obstacleClass25)
  }

  function addObstacle26(position) {
    cells[position].classList.add(obstacleClass26)
  }

  function addObstacle27(position) {
    cells[position].classList.add(obstacleClass27)
  }

  function addObstacle28(position) {
    cells[position].classList.add(obstacleClass28)
  }

  function addObstacle29(position) {
    cells[position].classList.add(obstacleClass29)
  }

  function addObstacle30(position) {
    cells[position].classList.add(obstacleClass30)
  }

  function addObstacle31(position) {
    cells[position].classList.add(obstacleClass31)
  }

  function addObstacle32(position) {
    cells[position].classList.add(obstacleClass32)
  }

  function addObstacle33(position) {
    cells[position].classList.add(obstacleClass33)
  }

  function addObstacle34(position) {
    cells[position].classList.add(obstacleClass34)
  }

  function addObstacle35(position) {
    cells[position].classList.add(obstacleClass35)
  }

  function addObstacle36(position) {
    cells[position].classList.add(obstacleClass36)
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

  function removeObstacle5(position) {
    cells[position].classList.remove(obstacleClass5)
  }

  function removeObstacle6(position) {
    cells[position].classList.remove(obstacleClass6)
  }

  function removeObstacle7(position) {
    cells[position].classList.remove(obstacleClass7)
  }

  function removeObstacle8(position) {
    cells[position].classList.remove(obstacleClass8)
  }

  function removeObstacle9(position) {
    cells[position].classList.remove(obstacleClass9)
  }

  function removeObstacle10(position) {
    cells[position].classList.remove(obstacleClass10)
  }

  function removeObstacle11(position) {
    cells[position].classList.remove(obstacleClass11)
  }

  function removeObstacle12(position) {
    cells[position].classList.remove(obstacleClass12)
  }

  function removeObstacle13(position) {
    cells[position].classList.remove(obstacleClass13)
  }

  function removeObstacle14(position) {
    cells[position].classList.remove(obstacleClass14)
  }

  function removeObstacle15(position) {
    cells[position].classList.remove(obstacleClass15)
  }

  function removeObstacle16(position) {
    cells[position].classList.remove(obstacleClass16)
  }

  function removeObstacle17(position) {
    cells[position].classList.remove(obstacleClass17)
  }

  function removeObstacle18(position) {
    cells[position].classList.remove(obstacleClass18)
  }

  function removeObstacle19(position) {
    cells[position].classList.remove(obstacleClass19)
  }

  function removeObstacle20(position) {
    cells[position].classList.remove(obstacleClass20)
  }

  function removeObstacle21(position) {
    cells[position].classList.remove(obstacleClass21)
  }

  function removeObstacle22(position) {
    cells[position].classList.remove(obstacleClass22)
  }

  function removeObstacle23(position) {
    cells[position].classList.remove(obstacleClass23)
  }

  function removeObstacle24(position) {
    cells[position].classList.remove(obstacleClass24)
  }

  function removeObstacle25(position) {
    cells[position].classList.remove(obstacleClass25)
  }

  function removeObstacle26(position) {
    cells[position].classList.remove(obstacleClass26)
  }

  function removeObstacle27(position) {
    cells[position].classList.remove(obstacleClass27)
  }

  function removeObstacle28(position) {
    cells[position].classList.remove(obstacleClass28)
  }

  function removeObstacle29(position) {
    cells[position].classList.remove(obstacleClass29)
  }

  function removeObstacle30(position) {
    cells[position].classList.remove(obstacleClass30)
  }

  function removeObstacle31(position) {
    cells[position].classList.remove(obstacleClass31)
  }

  function removeObstacle32(position) {
    cells[position].classList.remove(obstacleClass32)
  }

  function removeObstacle33(position) {
    cells[position].classList.remove(obstacleClass33)
  }

  function removeObstacle34(position) {
    cells[position].classList.remove(obstacleClass34)
  }

  function removeObstacle35(position) {
    cells[position].classList.remove(obstacleClass35)
  }

  function removeObstacle36(position) {
    cells[position].classList.remove(obstacleClass36)
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

    if (obstacle3CurrentPosition % width === 0) {
      obstacle3CurrentPosition += 19
    } else {
      obstacle3CurrentPosition--
    }
    addObstacle3(obstacle3CurrentPosition)
    collision()
  }, 500)

  const obstacle4Movement = setInterval(() => {
    removeObstacle4(obstacle4CurrentPosition)

    if (obstacle4CurrentPosition % width === 0) {
      obstacle4CurrentPosition += 19
    } else {
      obstacle4CurrentPosition--
    }
    addObstacle4(obstacle4CurrentPosition)
    collision()
  }, 500)

  const obstacle5Movement = setInterval(() => {
    removeObstacle5(obstacle5CurrentPosition)

    if (obstacle5CurrentPosition % width === 0) {
      obstacle5CurrentPosition += 19
    } else {
      obstacle5CurrentPosition--
    }
    addObstacle5(obstacle5CurrentPosition)
    collision()
  }, 500)

  // moving right
  const obstacle6Movement = setInterval(() => {
    removeObstacle6(obstacle6CurrentPosition)

    if (obstacle6CurrentPosition % width === 0) {
      obstacle6CurrentPosition += 19
    } else {
      obstacle6CurrentPosition--
    }
    addObstacle6(obstacle6CurrentPosition)
    collision()
  }, 500)

  // moving  left
  const obstacle7Movement = setInterval(() => {
    removeObstacle7(obstacle7CurrentPosition)

    if (obstacle7CurrentPosition % width === width - 1) {
      obstacle7CurrentPosition -= 19
    } else {
      obstacle7CurrentPosition++
    }
    addObstacle7(obstacle7CurrentPosition)
    collision()
  }, 500)

  const obstacle8Movement = setInterval(() => {
    removeObstacle8(obstacle8CurrentPosition)

    if (obstacle8CurrentPosition % width === width - 1) {
      obstacle8CurrentPosition -= 19
    } else {
      obstacle8CurrentPosition++
    }
    addObstacle8(obstacle8CurrentPosition)
    collision()
  }, 500)

  const obstacle9Movement = setInterval(() => {
    removeObstacle9(obstacle9CurrentPosition)

    if (obstacle9CurrentPosition % width === width - 1) {
      obstacle9CurrentPosition -= 19
    } else {
      obstacle9CurrentPosition++
    }
    addObstacle9(obstacle9CurrentPosition)
    collision()
  }, 500)

  const obstacle10Movement = setInterval(() => {
    removeObstacle10(obstacle10CurrentPosition)

    if (obstacle10CurrentPosition % width === width - 1) {
      obstacle10CurrentPosition -= 19
    } else {
      obstacle10CurrentPosition++
    }
    addObstacle10(obstacle10CurrentPosition)
    collision()
  }, 500)

  const obstacle11Movement = setInterval(() => {
    removeObstacle11(obstacle11CurrentPosition)

    if (obstacle11CurrentPosition % width === width - 1) {
      obstacle11CurrentPosition -= 19
    } else {
      obstacle11CurrentPosition++
    }
    addObstacle11(obstacle11CurrentPosition)
    collision()
  }, 500)

  const obstacle12Movement = setInterval(() => {
    removeObstacle12(obstacle12CurrentPosition)

    if (obstacle12CurrentPosition % width === width - 1) {
      obstacle12CurrentPosition -= 19
    } else {
      obstacle12CurrentPosition++
    }
    addObstacle12(obstacle12CurrentPosition)
    collision()
  }, 500)

  const obstacle13Movement = setInterval(() => {
    removeObstacle13(obstacle13CurrentPosition)

    if (obstacle13CurrentPosition % width === 0) {
      obstacle13CurrentPosition += 19
    } else {
      obstacle13CurrentPosition--
    }
    addObstacle13(obstacle13CurrentPosition)
    collision()
  }, 500)

  const obstacle14Movement = setInterval(() => {
    removeObstacle14(obstacle14CurrentPosition)

    if (obstacle14CurrentPosition % width === 0) {
      obstacle14CurrentPosition += 19
    } else {
      obstacle14CurrentPosition--
    }
    addObstacle14(obstacle14CurrentPosition)
    collision()
  }, 500)

  const obstacle15Movement = setInterval(() => {
    removeObstacle15(obstacle15CurrentPosition)

    if (obstacle15CurrentPosition % width === 0) {
      obstacle15CurrentPosition += 19
    } else {
      obstacle15CurrentPosition--
    }
    addObstacle15(obstacle15CurrentPosition)
    collision()
  }, 500)

  const obstacle16Movement = setInterval(() => {
    removeObstacle16(obstacle16CurrentPosition)

    if (obstacle16CurrentPosition % width === 0) {
      obstacle16CurrentPosition += 19
    } else {
      obstacle16CurrentPosition--
    }
    addObstacle16(obstacle16CurrentPosition)
    collision()
  }, 500)

  const obstacle17Movement = setInterval(() => {
    removeObstacle17(obstacle17CurrentPosition)

    if (obstacle17CurrentPosition % width === 0) {
      obstacle17CurrentPosition += 19
    } else {
      obstacle17CurrentPosition--
    }
    addObstacle17(obstacle17CurrentPosition)
    collision()
  }, 500)

  const obstacle18Movement = setInterval(() => {
    removeObstacle18(obstacle18CurrentPosition)

    if (obstacle18CurrentPosition % width === 0) {
      obstacle18CurrentPosition += 19
    } else {
      obstacle18CurrentPosition--
    }
    addObstacle18(obstacle18CurrentPosition)
    collision()
  }, 500)

  const obstacle19Movement = setInterval(() => {
    removeObstacle19(obstacle19CurrentPosition)

    if (obstacle19CurrentPosition % width === width - 1) {
      obstacle19CurrentPosition -= 19
    } else {
      obstacle19CurrentPosition++
    }
    addObstacle19(obstacle19CurrentPosition)
    collision()
  }, 500)

  const obstacle20Movement = setInterval(() => {
    removeObstacle20(obstacle20CurrentPosition)

    if (obstacle20CurrentPosition % width === width - 1) {
      obstacle20CurrentPosition -= 19
    } else {
      obstacle20CurrentPosition++
    }
    addObstacle20(obstacle20CurrentPosition)
    collision()
  }, 500)

  const obstacle21Movement = setInterval(() => {
    removeObstacle21(obstacle21CurrentPosition)

    if (obstacle21CurrentPosition % width === width - 1) {
      obstacle21CurrentPosition -= 19
    } else {
      obstacle21CurrentPosition++
    }
    addObstacle21(obstacle21CurrentPosition)
    collision()
  }, 500)

  const obstacle22Movement = setInterval(() => {
    removeObstacle22(obstacle22CurrentPosition)

    if (obstacle22CurrentPosition % width === width - 1) {
      obstacle22CurrentPosition -= 19
    } else {
      obstacle22CurrentPosition++
    }
    addObstacle22(obstacle22CurrentPosition)
    collision()
  }, 500)

  const obstacle23Movement = setInterval(() => {
    removeObstacle23(obstacle23CurrentPosition)

    if (obstacle23CurrentPosition % width === width - 1) {
      obstacle23CurrentPosition -= 19
    } else {
      obstacle23CurrentPosition++
    }
    addObstacle23(obstacle23CurrentPosition)
    collision()
  }, 500)

  const obstacle24Movement = setInterval(() => {
    removeObstacle24(obstacle24CurrentPosition)

    if (obstacle24CurrentPosition % width === width - 1) {
      obstacle24CurrentPosition -= 19
    } else {
      obstacle24CurrentPosition++
    }
    addObstacle24(obstacle24CurrentPosition)
    collision()
  }, 500)

  const obstacle25Movement = setInterval(() => {
    removeObstacle25(obstacle25CurrentPosition)

    if (obstacle25CurrentPosition % width === 0) {
      obstacle25CurrentPosition += 19
    } else {
      obstacle25CurrentPosition--
    }
    addObstacle25(obstacle25CurrentPosition)
    collision()
  }, 500)

  const obstacle26Movement = setInterval(() => {
    removeObstacle26(obstacle26CurrentPosition)

    if (obstacle26CurrentPosition % width === 0) {
      obstacle26CurrentPosition += 19
    } else {
      obstacle26CurrentPosition--
    }
    addObstacle26(obstacle26CurrentPosition)
    collision()
  }, 500)

  const obstacle27Movement = setInterval(() => {
    removeObstacle27(obstacle27CurrentPosition)

    if (obstacle27CurrentPosition % width === 0) {
      obstacle27CurrentPosition += 19
    } else {
      obstacle27CurrentPosition--
    }
    addObstacle27(obstacle27CurrentPosition)
    collision()
  }, 500)

  const obstacle28Movement = setInterval(() => {
    removeObstacle28(obstacle28CurrentPosition)

    if (obstacle28CurrentPosition % width === 0) {
      obstacle28CurrentPosition += 19
    } else {
      obstacle28CurrentPosition--
    }
    addObstacle28(obstacle28CurrentPosition)
    collision()
  }, 500)

  const obstacle29Movement = setInterval(() => {
    removeObstacle29(obstacle29CurrentPosition)

    if (obstacle29CurrentPosition % width === 0) {
      obstacle29CurrentPosition += 19
    } else {
      obstacle29CurrentPosition--
    }
    addObstacle29(obstacle29CurrentPosition)
    collision()
  }, 500)

  const obstacle30Movement = setInterval(() => {
    removeObstacle30(obstacle30CurrentPosition)

    if (obstacle30CurrentPosition % width === 0) {
      obstacle30CurrentPosition += 19
    } else {
      obstacle30CurrentPosition--
    }
    addObstacle30(obstacle30CurrentPosition)
    collision()
  }, 500)

  const obstacle31Movement = setInterval(() => {
    removeObstacle31(obstacle31CurrentPosition)

    if (obstacle31CurrentPosition % width === width - 1) {
      obstacle31CurrentPosition -= 19
    } else {
      obstacle31CurrentPosition++
    }
    addObstacle31(obstacle31CurrentPosition)
    collision()
  }, 500)

  const obstacle32Movement = setInterval(() => {
    removeObstacle32(obstacle32CurrentPosition)

    if (obstacle32CurrentPosition % width === width - 1) {
      obstacle32CurrentPosition -= 19
    } else {
      obstacle32CurrentPosition++
    }
    addObstacle32(obstacle32CurrentPosition)
    collision()
  }, 500)

  const obstacle33Movement = setInterval(() => {
    removeObstacle33(obstacle33CurrentPosition)

    if (obstacle33CurrentPosition % width === width - 1) {
      obstacle33CurrentPosition -= 19
    } else {
      obstacle33CurrentPosition++
    }
    addObstacle33(obstacle33CurrentPosition)
    collision()
  }, 500)

  const obstacle34Movement = setInterval(() => {
    removeObstacle34(obstacle34CurrentPosition)

    if (obstacle34CurrentPosition % width === width - 1) {
      obstacle34CurrentPosition -= 19
    } else {
      obstacle34CurrentPosition++
    }
    addObstacle34(obstacle34CurrentPosition)
    collision()
  }, 500)

  const obstacle35Movement = setInterval(() => {
    removeObstacle35(obstacle35CurrentPosition)

    if (obstacle35CurrentPosition % width === width - 1) {
      obstacle35CurrentPosition -= 19
    } else {
      obstacle35CurrentPosition++
    }
    addObstacle35(obstacle35CurrentPosition)
    collision()
  }, 500)

  const obstacle36Movement = setInterval(() => {
    removeObstacle36(obstacle36CurrentPosition)

    if (obstacle36CurrentPosition % width === width - 1) {
      obstacle36CurrentPosition -= 19
    } else {
      obstacle36CurrentPosition++
    }
    addObstacle36(obstacle36CurrentPosition)
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

    } else if (playerCurrentPosition === obstacle5CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle6CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle7CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle8CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle9CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle10CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle11CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle12CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle13CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle14CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle15CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle16CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle17CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle18CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle19CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle20CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle21CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle22CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle23CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle24CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle25CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle26CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle27CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle28CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle29CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle30CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle31CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle32CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle33CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle34CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle35CurrentPosition) {
      collisionSoundChewy()
      removePlayer(playerCurrentPosition)
      addPlayer(playerStartPosition)
      playerCurrentPosition = playerStartPosition
    
    } else if (playerCurrentPosition === obstacle36CurrentPosition) {
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

  function collisionCrashSound() {
    audio.src = 'sounds/ENCRASH1.wav'
    audio.play()
  }

  // win sounds 
  function YodaLaugh() {
    audio.src = 'sounds/YODA3.wav'
    audio.play()
  }

  // lose sounds
  function jabbaLaugh() {
    audio.src = 'sounds/sw-jabba.wav'
    audio.play()
  }





  //  event listeners
  document.addEventListener('keydown', playerMovement)

  //must add each obstacle start position 
  createGrid(playerStartPosition, obstacleStartPosition, obstacle2StartPosition, obstacle3StartPosition, obstacle4StartPosition, starPosition1, starPosition2, starPosition3, starPosition4, starPosition5, starPosition6, starPosition7, starPosition8, starPosition9, starPosition10, starPosition11, starPosition12, starPosition13, starPosition14, starPosition15, starPosition16, obstacle5StartPosition, obstacle6StartPosition, obstacle7StartPosition, obstacle8StartPosition, obstacle9StartPosition, obstacle10StartPosition, obstacle11StartPosition, obstacle12StartPosition, obstacle13StartPosition, obstacle14StartPosition, obstacle15StartPosition, obstacle16StartPosition, obstacle17StartPosition, obstacle18StartPosition, obstacle19StartPosition, obstacle20StartPosition, obstacle21StartPosition, obstacle22StartPosition, obstacle23StartPosition, obstacle24StartPosition, obstacle25StartPosition, obstacle26StartPosition, obstacle27StartPosition, obstacle28StartPosition, obstacle29StartPosition, obstacle30StartPosition, obstacle31StartPosition, obstacle32StartPosition, obstacle33StartPosition, obstacle34StartPosition, obstacle35StartPosition, obstacle36StartPosition)
}


window.addEventListener('DOMContentLoaded', init)