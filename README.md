# mastermindtsa

Demo: https://mdanialzadeh.github.io/mastermindtsa/

coded in vs code and debugged using google chrome. build is currently not optimized for other browsers or mobile. 

Framework: React
Global state Managment: Recoil.js
Libraries: React Bootstrap

Project Layout:

1. Using Recoil.js to create atoms that controll global statmanagment i based the main component around a screen controller to change what is displayed on the screen aswell as how different components are rendered.

2. when the game board is loaded the global game state becomes newgame and fetches a new number for the computer secret answer. 

3. in the gameplay component the ui buttons for each color are presented and as they are chosed set to a use state value for the current round. because recoil allows for global state managment i was able to dynamically represent the choices on the game log through another component.

4. when the round is submitted the players answer is compared to the computers secret and evaluates into three different values:
  - Correct: pegs in the correct position and color
  - matched: pegs in the wrong possition but right color
  - missed: incorrect possition and color

5. the values are passed into another atom call round log that takes the values and stores them in the log as well as passes the information to the results log that which in turn renders the results section for each round.

6. the game continues for 10 round or untill the correct answer is submitted.


This was one of my first Projects where i had used Recoil.js as a global state manager. it is an amazing tool that i have just barley scraped the surface of and hope to learn more about the advanced capabilities of the library.

To Do:
1. I was hoping to add some animations to the project to give it a little more life.  Hoping to add React spring to the application inorder to:
 - create moving drawer on game load
 - animation for loading game board after new game
 - animate pegs and result icons when mounting and unmounting to give a more 3d feel
2. add more personalization such as name, difficulty, and tracker for wins and losses during a session.
3. clean up CSS and optimize for other browsers and mobile



