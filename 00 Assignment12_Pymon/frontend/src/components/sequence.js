import React from "react";
import SequenceLight from "./sequenceLight"

export default class Sequence extends React.Component {
    render() {
        console.log("this is sequence.js");
        return <div className="sequence">
            {this.props.sequence.map((s, index) => (
                <SequenceLight key={index} color={s} show={(this.props.step > index)}/>
            ))}
        </div>
    }
}