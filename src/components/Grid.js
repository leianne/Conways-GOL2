import React, {  Component } from 'react';
import  Box from './Cell';

class Grid extends Component {
	render() {
		let width = this.props.columns *  14
		let rowsArr = [];

		let boxClass = "";
		for (var i = 0; i < this.props.rows; i++) {
			for (var j = 0; j < this.props.columns; j++) {
				let boxId = i + "_" + j;

				boxClass = this.props.gridFull[i][j] ? "box on" : "box off";
				switch (this.props.color) {
					case "pride":
						boxClass += " pride"
						break;
					case "love":
						boxClass += " love"
						break;
					case "funky":
						boxClass += " funky"
						break;
					default:
						break;
				}
                console.log("++++++",boxClass)

                rowsArr.push(
					<Box
						boxClass={boxClass}
						key={boxId}
						boxId={boxId}
						row={i}
						col={j}
						selectCell={this.props.selectCell}
					/>
				);
			}
		}
		return (
			<div className="grid" style={{width: width}}>
				{rowsArr}
			</div>
		);
	}
}

export default Grid;