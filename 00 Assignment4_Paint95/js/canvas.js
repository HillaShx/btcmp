let paint95 = {
  meta: {
    title: "Paint"
  },
  canvas: {
    title: "untitled",
    width: "500",
    height: "500",
    backgroundColor: "#ffffff"
  },
  colorPalette: [
    "#b24c63",
    "#5438dc",
    "#357ded",
    "#56eef4",
    "#32e875",
    "#98d2eb"
  ],
  brush: {
    brushOn: true,
    isDrawing: false,
    eraserOn: false,
    isErasing: false,
    width: 3,
  },
  initPaint: function() {
    let paintHeader = $("<div/>");
    paintHeader.addClass("header");
    let paintTitle = $("<h1/>");
    paintTitle.attr("id", "paint-title")
    let canvas = $("<div/>");
    canvas.attr("id","canvas");
    canvas.css("background-color", paint95.canvas.backgroundColor);
    paintTitle.appendTo(paintHeader);
    paintHeader.appendTo("body");
    canvas.appendTo("body");
    colorOnBrush = paint95.initPalette();
    paint95.getCanvasInfo();
    let clearWarning = $("<div/>");
    clearWarning.addClass("modal");
    clearWarning.attr("id","warning-modal")
    clearWarning.appendTo("body");
    let clearMsg = $("<div/>");
    clearMsg.attr("id", "warning-message");
    clearMsg.text("Are you sure you want to clear your canvas?");
    clearMsg.appendTo(clearWarning);
    let confirmClear = $("<button/>");
    confirmClear.addClass("clear-options");
    confirmClear.text("YES");
    confirmClear.attr("value", "yes");
    let denyClear = $("<button/>");
    denyClear.addClass("clear-options");
    denyClear.text("NO");
    denyClear.attr("value", "no");
    confirmClear.appendTo(clearMsg);
    denyClear.appendTo(clearMsg);
  },
  initPalette: function() {
    var colorPalette = $("<div/>");
    colorPalette.attr("id", "color-palette");
    for (let i=0; i<paint95.colorPalette.length; i++) {
      let colorItem = $("<div/>");
      colorItem.addClass("color-in-palette");
      colorItem.css("background-color", paint95.colorPalette[i]);
      colorItem.appendTo(colorPalette);
    }
    colorPalette.appendTo("body")
    let currColor = $("<div/>");
    currColor.attr("id", "brush");
    let colorOnBrush = paint95.colorPalette[0]; 
    currColor.css("background-color", colorOnBrush);
    let colorIndicator = $("<span/>");
    colorIndicator.attr("id", "color-indicator");
    paint95.brush.colorOnBrush = colorOnBrush;
    colorIndicator.text("brush color:")
    colorIndicator.appendTo(colorPalette);
    currColor.appendTo(colorPalette);
    let eraserBtn = $("<div/>");
    eraserBtn.addClass("operation-btn");
    eraserBtn.attr("id", "erase-btn");
    eraserBtn.appendTo(colorPalette);
    let brushBtn = $("<div/>");
    brushBtn.addClass("operation-btn");
    brushBtn.attr("id", "brush-btn");
    brushBtn.appendTo(colorPalette);
    let increaseBrushSize = $("<div/>");
    increaseBrushSize.addClass("operation-btn");
    increaseBrushSize.attr("id", "increase-brush");
    increaseBrushSize.text("+");
    increaseBrushSize.appendTo(colorPalette)
    let decreaseBrushSize = $("<div/>");
    decreaseBrushSize.addClass("operation-btn");
    decreaseBrushSize.attr("id", "decrease-brush");
    decreaseBrushSize.text("-");
    decreaseBrushSize.appendTo(colorPalette)
    let clearBtn = $("<div/>");
    clearBtn.addClass("operation-btn");
    clearBtn.attr("id", "clear-canvas");
    clearBtn.text("CLEAR");
    clearBtn.appendTo(colorPalette);
  },
  getCanvasInfo: function() {
    let welcomeModal = $("<div/>");
    welcomeModal.addClass("modal");
    welcomeModal.attr("id","welcome-modal");
    welcomeModal.appendTo("body");
    let welcomeMsg = $("<div/>");
    welcomeMsg.attr("id", "welcome-message");
    welcomeMsg.text("Welcome to Paint! Create your canvas:");
    welcomeMsg.appendTo(welcomeModal);
    let paintingName = $("<input/>");
    paintingName.addClass("canvas-input");
    paintingName.attr("id", "title");
    paintingName.attr("placeholder", "name (default: untitled)");
    let heightInput = $("<input/>");
    heightInput.addClass("canvas-input");
    heightInput.attr("id", "height");
    heightInput.attr("placeholder", "height (default: 500)");
    let widthInput = $("<input/>");
    widthInput.addClass("canvas-input");
    widthInput.attr("id", "width");
    widthInput.attr("placeholder", "width (default: 500)");
    paintingName.appendTo("#welcome-message");
    heightInput.appendTo("#welcome-message");
    widthInput.appendTo("#welcome-message");
    // var bgColorInput = $("<input/>");
    // bgColorInput.addClass("canvas-input");
    // bgColorInput.attr("id", "bgcolor-input");
    // bgColorInput.attr("placeholder", "background color (default: #ffffff)");
    paintingName.appendTo("#welcome-message");
    heightInput.appendTo("#welcome-message");
    widthInput.appendTo("#welcome-message");
    // bgColorInput.appendTo("#welcome-message");
    let startButton = $("<button/>");
    startButton.attr("id", "start-button");
    startButton.text("Let's GO!").appendTo("#welcome-message");
  },
  drawing: function(dotX,dotY) {
    if (paint95.brush.brushOn) {
      let dot = $("<div/>");
      dot.attr("class", "dot");
      dot.css("background-color", paint95.brush.colorOnBrush);
      dot.css("top", dotY + "px");
      dot.css("left", dotX + "px");
      dot.appendTo($("#canvas"));
      dot.css("height", paint95.brush.width);
      dot.css("width", paint95.brush.width);
    }
  },
  erasing: function(dotX, dotY) {
    if (paint95.brush.eraserOn) {
      let dot = $("<div/>");
      dot.attr("class", "dot");
      dot.css("background-color", paint95.canvas.backgroundColor);
      dot.css("top", dotY + "px");
      dot.css("left", dotX + "px");
      dot.appendTo($("#canvas"));
      dot.css("height", paint95.brush.width+10+"px");
      dot.css("width", paint95.brush.width+10+"px");
      }
    }
}

paint95.initPaint();

$("#start-button").click(function() {
  let inputs = $(".canvas-input");
  for (let i=0; i<inputs.length; i++){
    if ($(inputs[i]).attr("id") === "title" && $(inputs[i]).val() !== "") {
      paint95.canvas[$(inputs[i]).attr("id")] = $(inputs[i]).val();
    }
    else if ($(inputs[i]).val() !== "" && !isNaN($(inputs[i]).val())) {
      paint95.canvas[$(inputs[i]).attr("id")] = $(inputs[i]).val();
    }
  }
  $("#welcome-modal").css("display", "none");
  $("#canvas").css("height", `${paint95.canvas.height}px`);
  $("#canvas").css("width", `${paint95.canvas.width}px`);
  $("#canvas").css("background-color", paint95.canvas.backgroundColor);
  $("#paint-title").text(`${paint95.canvas.title} - ${paint95.meta.title}`);
});

$("#canvas").on("mousedown", function(e) {
  let dotPosY = e.pageY - $("#canvas").offset().top - (paint95.brush.width/2);
  let dotPosX = e.pageX - $("#canvas").offset().left - (paint95.brush.width/2);
  if (paint95.brush.brushOn) {
    paint95.brush.isDrawing = true;
    paint95.drawing(dotPosX,dotPosY);
  } else {
    paint95.brush.isErasing = true;
    paint95.erasing(dotPosX,dotPosY);
  }
});

$("#canvas").on("mousemove", function(e) {
  let dotPosY = e.pageY - $("#canvas").offset().top - (paint95.brush.width/2);
  let dotPosX = e.pageX - $("#canvas").offset().left - (paint95.brush.width/2);
  if (paint95.brush.brushOn && paint95.brush.isDrawing) {
    paint95.drawing(dotPosX,dotPosY);
  } else if (paint95.brush.eraserOn && paint95.brush.isErasing) {
    paint95.erasing(dotPosX,dotPosY);
  }
});

$(document).on("mouseup", function() {
  if (paint95.brush.brushOn) {
    paint95.brush.isDrawing = false;
  } else if (paint95.brush.eraserOn) {
    paint95.brush.isErasing = false;
  }
});

$(".color-in-palette").click(function(e) {
  let targetColor = $(e.target).css("background-color");
  paint95.brush.colorOnBrush = targetColor;
  paint95.brush.brushOn = true;
  paint95.brush.eraserOn = false;
  $("#brush").css("background-color", targetColor);
})

$("#erase-btn").click(function() {
  paint95.brush.brushOn = false;
  paint95.brush.eraserOn = true;
})

$("#brush-btn").click(function() {
  paint95.brush.brushOn = true;
  paint95.brush.eraserOn = false;
})

$("#clear-canvas").click(function() {
  $("#warning-modal").css("display", "block");
});

$(".clear-options").click(function(e) {
  $("#warning-modal").css("display", "none");
  if ($(e.target).val() === "yes") {
    $("#canvas").empty();
  }
});

$("#increase-brush").click(function() {
  if (paint95.brush.width <= 36) {
    paint95.brush.width += 2;
  }
})

$("#decrease-brush").click(function() {
  if (paint95.brush.width >= 2) {
    paint95.brush.width -= 2;
  }
})