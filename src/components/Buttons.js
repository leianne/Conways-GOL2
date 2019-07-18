import React, { Component } from 'react';

class Buttons extends Component {

	

	render() {
		return (
				<div className="btnContainer">
					<div className="btnsTop">
						<button className="btns" onClick={this.props.playSelected}>
							Play
						</button>
						<button className="btns" onClick={this.props.pauseSelected}>
						Pause
						</button>
						<button className="btns" onClick={this.props.clearGrid}>
						Clear
						</button>
						<button className="btns" onClick={this.props.slow}>
						Slow
						</button>
						<button className="btns" onClick={this.props.fast}>
						Fast
						</button>
						<button className="btns" onClick={this.props.seedGrid}>
						Seed
						</button>
					</div>
								
				</div>
			)
	}
}

export default Buttons;