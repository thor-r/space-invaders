function init() {
  // variables so far
  const grid = document.querySelector('.grid')

  const width = 10
  const cellNum = width * 20
  const cells = []

  const playerClass = 'player'
  const playerStartPosition = 0
  let playerCurrentPosition = 0

  const obstacleClass = 'obstacle'
  const obstacleStartPosition = 0
  let obstacleCurrentPosition = 0

  // making a grid
  function createGrid(playerStartPosition) {
    for (let i = 0; i < cellNum; i++) {
      const cell = document.createElement('div')
      cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    }
  }

  // adding player to grid
  // function addPlayer(position) {
    
  // }























}

window.addEventListener('DOMContentLoaded', init)