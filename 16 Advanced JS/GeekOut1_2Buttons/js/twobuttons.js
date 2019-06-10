const openBtn = {
  msg: "This is the beginning"
};

const closeBtn = {
  msg: "Thank you!"
};

function printMsg(msg) {
  $("#msg").text(msg);
};

$("button").click(function(e) {
  if ($(e.target) === $("#open-btn")) {
    msgToAppear = printMsg.call(openBtn, this.msg);
  } else {
    msgToAppear = printMsg.call(closeBtn, this.msg);
  }
});


// I've given up and moved on to the assignment