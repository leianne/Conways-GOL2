import React, { Component } from 'react';

class Box extends React.Component {
	selectCell = () => {
		this.props.selectCell(this.props.row, this.props.col);
	}

	render() {
		return (
			<div
				className={this.props.boxClass}
				id={this.props.id}
				onClick={this.selectCell}
			/>
		);
	}
}


export default Box