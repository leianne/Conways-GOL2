import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid  from './components/Grid';
import Buttons from './components/Buttons';
import SizeBtns  from './components/SizeBtns';
import ColorBtns from './components/ColorBtns';
import PremadeBtns from './components/PremadeBtns';
import { love, spongebob, sunshine } from './resources/Premade';
import LearnMore from './components/LearnMore';
class App extends Component {

  constructor() {
		super();
		this.speed = 100;
		this.rows = 30;
		this.columns = 50;

		this.state = {
			generations: 0,
			gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
		}
  }
  
  componentDidMount() {
    this.seedGrid();
    this.playSelected();
  }

  selectCell = (row, col) => {
		let gridCopy = arrayClone(this.state.gridFull);
		gridCopy[row][col] = !gridCopy[row][col];
		this.setState({
			gridFull: gridCopy
		});
  }
  
  seedGrid = () => {
		let gridCopy = arrayClone(this.state.gridFull);
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.columns; j++) {
				if (Math.floor(Math.random() * 4) === 1) {
					gridCopy[i][j] = true;
				}
			}
		}
		this.setState({
			gridFull: gridCopy
		});
  }
  
  playSelected = () => {
		clearInterval(this.intervalId);
		this.intervalId = setInterval(this.play, this.speed);
	}

	pauseSelected = () => {
		clearInterval(this.intervalId);
  }
  
  slow = () => {
		this.speed = 1000;
		this.playSelected();
  }
  
  fast = () => {
		this.speed = 100;
		this.playSelected();
  }
  
  clearGrid = () => {
		let grid = Array(this.rows).fill().map(() => Array(this.columns).fill(false));
		this.setState({
			gridFull: grid,
			generations: 0
		});
		clearInterval(this.intervalId);

  }
  
  gridSize = (size) => {
		switch (size) {
			case "1":
				this.columns = 15;
				this.rows = 15;
			break;
			case "2":
				this.columns = 50;
				this.rows = 30;
			break;
			default:
				return;
		}
		this.clearGrid();
		clearInterval(this.intervalId);
  }
  
  gridPremade = (style) => {
	clearInterval(this.intervalId);

	switch (style) {
		case "heart":
			this.setState({
				gridFull: love
			}); 
		break;
		case "spongebob":
			this.setState({
				gridFull: spongebob
			}); 
		break;
		default:
			return
	}
	}

  gridColor = (color) => {
	this.setState({
		color: color
	})
  }
  play = () => {
		let grid = this.state.gridFull;
		let grid2 = arrayClone(this.state.gridFull);

		for (let i = 0; i < this.rows; i++) {
		  for (let j = 0; j < this.columns; j++) {
		    let count = 0;
		    if (i > 0) if (grid[i - 1][j]) count++;
		    if (i > 0 && j > 0) if (grid[i - 1][j - 1]) count++;
		    if (i > 0 && j < this.columns - 1) if (grid[i - 1][j + 1]) count++;
		    if (j < this.columns - 1) if (grid[i][j + 1]) count++;
		    if (j > 0) if (grid[i][j - 1]) count++;
		    if (i < this.rows - 1) if (grid[i + 1][j]) count++;
		    if (i < this.rows - 1 && j > 0) if (grid[i + 1][j - 1]) count++;
		    if (i < this.rows - 1 && j < this.columns - 1) if (grid[i + 1][j + 1]) count++;
		    if (grid[i][j] && (count < 2 || count > 3)) grid2[i][j] = false;
		    if (!grid[i][j] && count === 3) grid2[i][j] = true;
		  }
		}
		this.setState({
		  gridFull: grid2,
		  generations: this.state.generations + 1
		});

  }
  
  render() {
	console.log(this.state.gridFull)
	return (
	<>
	  <h1 className="header">Conway's Game of Life</h1>
      <div className="gameBoard">
		<div className="leftContainer">
		<Buttons
          playSelected={this.playSelected}
          pauseSelected={this.pauseSelected}
          slow={this.slow}
          fast={this.fast}
          clearGrid={this.clearGrid}
          seedGrid={this.seedGrid}
        />
		<Grid
		  color={this.state.color}
          gridFull={this.state.gridFull}
          rows={this.rows}
          columns={this.columns}
          selectCell={this.selectCell}
        />
        <h2>Generations: {this.state.generations}</h2> 
		</div>
		<div className="rightContainer">
			<SizeBtns gridSize={this.gridSize} />
			<ColorBtns gridColor={this.gridColor} />
			<PremadeBtns gridPremade={this.gridPremade} />

		</div>
      </div>
	  <br/>
	  <div className="btmHolder">
	  <div  className="btmContainer">
			<h3>About Game  of  Life</h3>
			<p>The Game of Life is not your typical computer game. It is a 'cellular automaton', and was invented by Cambridge mathematician John Conway.</p>
			<p>This game became widely known when it was mentioned in an article published by Scientific American in 1970. It consists of a collection of cells which, based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the game.</p>
		</div>
		<div  className="btmContainer">
			<h3>Game  of  Life Rules</h3>
			<ol>
				<li>Any live cell with fewer than two live neighbours dies (referred to as underpopulation or exposure[1]).</li>
				<li>Any live cell with more than three live neighbours dies (referred to as overpopulation or overcrowding).</li>
				<li>Any live cell with two or three live neighbours lives, unchanged, to the next generation.</li>
				<li>Any dead cell with exactly three live neighbours will come to life.</li>
			</ol>
		</div>
	  </div>
	  <div className="learnMore">
		<LearnMore/>
	  </div>
	  </>
    );  
  }
}

function arrayClone(arr) {
	return JSON.parse(JSON.stringify(arr));
}


export default App;
