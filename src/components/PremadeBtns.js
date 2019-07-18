import React, { Component } from 'react';

class PremadeBtns extends Component {

    handleSelect = (design) => {
        this.props.gridPremade(design)
    }
    render() {
        return (
            <div className="btnsBottom">
                <h3>Premade Designs</h3>
                <p style={{color: "red"}}>(for 50 x 30 board)</p>
                <button className="btns" onClick={() => this.handleSelect("heart")}>Heart</button>
                <button className="btns" onClick={() => this.handleSelect("spongebob")}>SpongeBob</button>
            </div>
        )
    }
}

export default PremadeBtns;