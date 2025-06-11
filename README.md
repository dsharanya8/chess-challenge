# chess-challenge

A simple command-line interface (CLI) Chess game written in TypeScript.

## Features

- Play chess from the terminal
- Supports all standard chess pieces and basic move validation
- Prevents moves that leave the king in check
- Clear and clean board display after each move
- Exit the game gracefully by typing `exit` or `quit`
- Error handling to keep the CLI stable during play

## Pre Req

- Node.js (v14 or above recommended)
- npm (Node Package Manager)

## Setup

1. Clone the repository:

   ```bash
   git clone <repo-url>
   cd <repo-directory>
Install dependencies:

npm install
Install development dependencies (for running TypeScript files directly):

npm install ts-node typescript @types/node --save-dev
Running the Game
Start the game with:

npx ts-node src/cli.ts
How to Play
Enter moves in standard algebraic notation for squares, for example:

E2 E4
D7 D5
To quit the game at any time, type exit or quit.

## Features to improve
- give points to each team.
- lot of exception handling
- unit test cases 
- valid moves 
- better front end representation.

## PS 
A little help on CLI features was referred like clear screen and how I can take inputs.