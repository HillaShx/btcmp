import React from "react";
import ReactDOM from "react-dom";
import SimonGame from "./components/simongame"

ReactDOM.render(<SimonGame />, document.getElementById("game"));

console.log("this is index.js");

// const filtersArray = document.getElementsByClassName("filter");
// filtersArray.forEach((filter)=>{
//     filter.addEventListener("click", (e)=>{
//         console.log(e.target)
//         // .target.innerHTML.toLowerCase()
//         ajax("/games/filter/", {"category_name":  e.target.innerHTML.toLowerCase()})
//     })
// })