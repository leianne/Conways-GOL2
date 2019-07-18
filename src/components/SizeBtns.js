import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class SizeBtns extends  Component {
    
    handleSelect = (evt) => {
		this.props.gridSize(evt);
    }
    
    render() {
        return (
            <div className="btnsBottom">
                <h3>Grid Size</h3>
                <Button className="btns" onClick={() => this.handleSelect("1")}>20x10</Button>
                <Button className="btns" onClick={() => this.handleSelect("2")}>50x30</Button>
                <Button className="btns" onClick={() => this.handleSelect("3")}>70x50</Button>
            </div>		
        )
    }
}

export default SizeBtns;