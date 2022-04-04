## General Assembly Project 1 - Star Frogger! 
### Table of Contents 

- [Timeframe](#timeframe)
- [Brief](#brief)
- [Technologies Used](#technologies-used)
- [Star Frogger](#star-frogger)
- [Deployed Version](#deployed-version)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Stage 1](#stage-1)
- [Stage 2](#stage-2)
- [Stage 3](#stage-3)
- [Bugs](#known-errors-or-bugs)
- [Challenges](#challenges)
- [Wins](#wins)
- [Future Improvements](#future-improvements)
- [Key Learnings](#key-learnings)
 
#### Timeframe
/9 days/

### Brief 
The assignment was to create a browser-based version of a classic arcade game using only Vanilla JavaScript, HTML and CSS - I chose to make my own Star Wars themed Frogger. The game had to be playable for one player and the obstacles had to be auto generated. We had to achieve this within 9 days and work solo. 

### Technologies Used:
* HTML5 with HTML5 audio
* CSS3
* JavaScript (ES6)
* Git 
* GitHub

### Star Frogger 
The player moves in 4 2D dimensions navigating their way to the top of the gameplay arena. On their way the player must navigate several obstacles to avoid collision on their way to the Death Star.

### Deployed Version 
[Star Frogger](https://thor-r.github.io/star-frogger/) - Use the WASD keys to move


### Getting Started
1. Access the source code via the ‘Clone or download’ button.
2. Right click on the index.html file in your code editor and select ‘open in browser’ to start the game.

## Development Process 
This was both my first project for General Assembly’s Software Engineering Immersive course and my first development project ever. I chose to replicate Frogger because I had the most experience playing it and thought that its mix of timing and collision functions would be a fun challenge to build.

### Stage 1 
I started the development process by outlining a plan consisting of the basic first steps needed to get a functioning play-space. From there I tackled the required MVP in stages.  

**I did not implement everything I listed in this initial checklist, but will do so in a version 2**

I created the 20 x 20 grid by creating a variable for ‘width’ and setting it to 20. Next, I created a variable - cellCount, for the desired cells within the grid (width x width). I then used an empty array in preparation to store the cells. The last step was to write a ‘for’ loop that iterates through the ‘cellCount’ variable creating divs while the number of iterations was less than the ‘cellCount’. This created 399 divs or ‘cells’.

The player spaceship was made by creating a ‘player’ variable and two related variables for ’start position’ and ‘current position’. The player variables were then given some unique CSS to distinguish it amongst the other grid cells. The player's start position variable was then passed in as an argument in the ‘createGrid’ function. 

The first step in allowing player movement was writing two functions. One for adding the player to the grid and one to remove the player. 

To handle the player movement I created a keydown event listener function that upon pressing the corresponding key this function executed, removing and adding the player variable from cell to cell. The player’s add and remove function were passed into this function. 

The next step was to add logic into the player moment function that blocked the player from moving out of the grid. This was done by using consecutive ‘if’ statements inputting the players current position and the corresponding key-press as conditionals against the numbers on the outermost grid cells. 

### Stage 2

Next, I added the obstacles to the grid, the process was the same as adding the player - creating obstacle variables and their related add/remove functions, then passing the add function along with the obstacle’s starting position into the create grid function. 

The automatic movement of the obstacles was achieved by using set interval functions. The function worked by calling the obstacles remove and add functions, to move the obstacle 1 cell to the left or right. I also used a nested ‘if’ that reset the obstacle at the start of its row when it reached the edge of the grid. This was one of the most time-consuming parts of the build due to the amount of obstacles I wanted to include. I used asynchronous timings for different obstacles’ set intervals to make it more difficult for the player. 

 The following step was to write the collision logic. This was done by making the player reset to the starting position when its current position occupied the same cell as any of the obstacles. 

The next must-have was to add a win-portal for the player, an area on the grid the player would have to aim for - whereupon if they reach that area they are reset at the start. I knew I wanted to use a complex image of the Death Star as the win-portal, thus it had to span several cells to give the illusion of a 3D image. To achieve this I split the Death Star image into 16 equal parts, I then created 16 classes corresponding to cells on the grid. Lastly I applied the split image as a background to the cells in CSS. 

### Stage 3

The Endgame was one of the last features I added. This required ‘win logic’ and ‘loss logic’ functions. To configure the win logic I first declared a variable for points, then wrote a function with an ‘if’ statement where if the players current position equaled that of any Death Star’s cells, points would increment by 1 and the player cell would be removed from its current position and added back at the start position. If the player accumulates 3 points the win logic function would execute a window alert stating ‘Victory!’

To handle the loss logic I used an ‘if’ statement where if the players lives equalled ‘0’ a window prompt would appear stating ‘Defeat!’, the player would be reset to the starting position and the lives counter would be reset back to 3. 

At this point in the project I found that CSS was taking the majority of the remaining time so the last piece of functionality I decided to implement was sounds that would trigger with different in-game events. I added different sounds for changes in the players ship direction, unique sounds upon collision with asteroids vs enemy ships and win/loss sounds. 

### Known Errors or Bugs
Collision Sounds: If the player collides with either the obstacles or the Death Star at speed the sound will occasionally not play. 

#### Challenges
* I found that most tasks took longer than I had predicted - especially CSS - during planning, this meant I had to forgo most of my stretch goals. 
* At first my collision function would create duplicates of the player, after some research I realised I had to redefine the players current position even after it had been removed. 

#### Wins
* Styling - I am pleased with the overall theme and color choice. 
* Gained experience in programmatic problem solving and logical thinking, also learned how to wireframe a project and section it into stages. 

### Future Improvements
* Take off score-cap and add a high score counter using local storage.
* Start Game modal.
* CSS animations to create a more polished design.
* Animated countdown bar if timer reaches zero animation popup of Death Star firing its main weapon appears - Death Star exploding popup animation on win.
* The enemy ships will fire lasers at the player. 
* Difficulty selector that generates correlating game boards (Easy, Medium, Hard).

### Key Learnings
Building my first Vanilla JavaScript game was a lesson persevering whilst being unsure of my own ability. But by the end of the project I was far more adept in my understanding of DOM manipulation, timing functions and the overall way in which JS reads and renders the code.

I learned very quickly why it is important not to write code that is repetitive - found mine a struggle to keep track of. If given the same task again I would make a decided effort to write code that was both more concise and elegant. 

