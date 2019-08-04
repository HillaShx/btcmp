import React from "react";

export default class SimonBtn extends React.Component {
    activate(){
        if (!this.props.disabled){
            this.props.clickAction(this.props.color, true);
        }
    }

    render() {
        console.log("this is buttons.js");
        return <button  onClick={this.activate.bind(this)} style={{backgroundColor:this.props.color}} className={`light-btn ${(this.props.active)? "active" : ""} ${(this.props.disabled)? "disabled" : ""}`}>
        </button>
    }
}