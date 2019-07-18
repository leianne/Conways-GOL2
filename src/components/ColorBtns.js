import React, { Component } from 'react';

class ColorBtns extends  Component {
    
    handleSelect = (evt) => {
		this.props.gridColor(evt);
    }
    
    render() {
        return (
            <div className="btnsBottom">
                <h3>Grid Color</h3>
                <button className="btns" onClick={() => this.handleSelect("pride")}>pride</button>
                <button className="btns" onClick={() => this.handleSelect("love")}>love</button>
                <button className="btns" onClick={() => this.handleSelect("funky")}>funky</button>
            </div>		
        )
    }
}

export default ColorBtns;


