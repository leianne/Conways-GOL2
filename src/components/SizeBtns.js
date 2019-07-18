import React, { Component } from 'react';

class SizeBtns extends  Component {
    
    handleSelect = (evt) => {
		this.props.gridSize(evt);
    }
    
    render() {
        return (
            <div className="btnsBottom">
                <h3>Board Size</h3>
                <button className="btns" onClick={() => this.handleSelect("1")}>15x15</button>
                <button className="btns" onClick={() => this.handleSelect("2")}>50x30</button>
            </div>		
        )
    }
}

export default SizeBtns;