import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class PremadeBtns extends Component {

    handleSelect = (design) => {
        this.props.gridPremade(design)
    }
    render() {
        return (
            <div className="btnsBottom">
                <h3>Premade Designs</h3>
                <Button className="btns" onClick={() => this.handleSelect("heart")}>Heart</Button>
                <Button className="btns" onClick={() => this.handleSelect("spongebob")}>SpongeBob</Button>
            </div>
        )
    }
}

export default PremadeBtns;