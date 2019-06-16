"use strict";

const openBtn = {
  msg: "This is the beginning"
};

const closeBtn = {
  msg: "Thank you!"
};

function printMsg() {
  $("#msg").html(this.msg);
};

$("button").click(function(e) {
  let printMsgToDOM = printMsg.bind(closeBtn);
	if ($(e.target).is($("#open-btn"))) {
	    printMsgToDOM = printMsg.bind(openBtn);
	}
	printMsgToDOM();
});

