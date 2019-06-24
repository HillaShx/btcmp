const data = {
    linkAddress: "https://www.google.com/",
    linkText: "google",
    min: -5,
    max: 5,
    color: "maroon",
    "font-weight": "bold",
    buttonText: "click me"
};

function render(data) {
    ReactDOM.render(
        <div>
            <a href={data.linkAddress} className="border" target="_blank">go to {data.linkText}</a>
            <input style={{display: "block"}} type="range" min={data.min - 1} max={data.max * 2} step="2"/>
            <button id="click" style={{color: data.color, "font-weight": data["font-weight"]}}>{data.buttonText}</button>
        </div>,
        document.getElementById("root")
    );
}

render(data);