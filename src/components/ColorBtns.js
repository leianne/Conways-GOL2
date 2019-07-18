import React, { Component } from 'react';
import { Dropdown, DropdownButton, Button } from 'react-bootstrap';

class ColorBtns extends  Component {
    
    handleSelect = (evt) => {
		this.props.gridColor(evt);
    }
    
    render() {
        return (
            <div className="btnsBottom">
                <h3>Grid Color</h3>
                <Button className="btns" onClick={() => this.handleSelect("pride")}>pride</Button>
                <Button className="btns" onClick={() => this.handleSelect("love")}>love</Button>
                <Button className="btns" onClick={() => this.handleSelect("funky")}>funky</Button>
            </div>		
        )
    }
}

export default ColorBtns;


