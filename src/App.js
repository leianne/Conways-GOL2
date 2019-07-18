import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid  from './components/Grid';
import Buttons from './components/Buttons';
import SizeBtns  from './components/SizeBtns';
import ColorBtns from './components/ColorBtns';
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
				this.columns = 70;
				this.rows = 50;
		}
		this.clearGrid();
		clearInterval(this.intervalId);

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
	  <h1>Conway's Game of Life</h1>
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
		</div>
      </div>
	  </>
    );  
  }
}

function arrayClone(arr) {
	return JSON.parse(JSON.stringify(arr));
}


export default App;
