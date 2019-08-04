import React from "react";

export default class SequenceLight extends React.Component {
    render() {
        console.log("this is sequenceLight.js");
        return <div className="sequence-light">
            {this.props.show && <div className="inner-light" style={{backgroundColor:this.props.color}}></div>}
        </div>
    }
}