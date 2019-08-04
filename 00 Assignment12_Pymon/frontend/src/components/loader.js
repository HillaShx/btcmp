import React from "react";

export default class Loader extends React.Component {
    render() {
        console.log("this is loader.js");
        return <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    }
}