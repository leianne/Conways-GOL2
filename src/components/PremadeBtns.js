import React, { Component } from 'react';

class PremadeBtns extends Component {

    handleSelect = (design) => {
        this.props.gridPremade(design)
    }
    render() {
        return (
            <div className="btnsBottom">
                <h3>Premade Designs</h3>
                <button className="btns" onClick={() => this.handleSelect("heart")}>Heart</button>
                <button className="btns" onClick={() => this.handleSelect("spongebob")}>SpongeBob</button>
            </div>
        )
    }
}

export default PremadeBtns;