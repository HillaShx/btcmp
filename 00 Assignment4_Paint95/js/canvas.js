var paint95 = {
  meta: {
    title: "Paint"
  },
  canvas: {
    name: "untitled",
    width: "500",
    height: "500",
    backgroundColor: "white"
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
    var paintHeader = $("<div/>");
    paintHeader.addClass("header");
    var paintTitle = $("<h1/>");
    paintTitle.attr("id", "paint-title")
    var canvas = $("<div/>");
    canvas.attr("id","canvas");
    canvas.css("background-color", paint95.canvas.backgroundColor);
    paintTitle.appendTo(paintHeader);
    paintHeader.appendTo("body");
    canvas.appendTo("body");
    colorOnBrush = paint95.initPalette();
    paint95.getCanvasInfo();
    var clearWarning = $("<div/>");
    clearWarning.addClass("modal");
    clearWarning.attr("id","warning-modal")
    clearWarning.appendTo("body");
    var clearMsg = $("<div/>");
    clearMsg.attr("id", "warning-message");
    clearMsg.text("Are you sure you want to clear your canvas?");
    clearMsg.appendTo(clearWarning);
    var confirmClear = $("<button/>");
    confirmClear.addClass("clear-options");
    confirmClear.text("YES");
    confirmClear.attr("value", "yes");
    var denyClear = $("<button/>");
    denyClear.addClass("clear-options");
    denyClear.text("NO");
    denyClear.attr("value", "no");
    confirmClear.appendTo(clearMsg);
    denyClear.appendTo(clearMsg);
  },
  initPalette: function() {
    var colorPalette = $("<div/>");
    colorPalette.attr("id", "color-palette");
    for (var i=0; i<paint95.colorPalette.length; i++) {
      var colorItem = $("<div/>");
      colorItem.addClass("color-in-palette");
      colorItem.css("background-color", paint95.colorPalette[i]);
      colorItem.appendTo(colorPalette);
    }
    colorPalette.appendTo("body")
    var currColor = $("<div/>");
    currColor.attr("id", "brush");
    var colorOnBrush = paint95.colorPalette[0]; 
    currColor.css("background-color", colorOnBrush);
    var colorIndicator = $("<span/>");
    colorIndicator.attr("id", "color-indicator");
    paint95.brush.colorOnBrush = colorOnBrush;
    colorIndicator.text("brush color:")
    colorIndicator.appendTo(colorPalette);
    currColor.appendTo(colorPalette);
    var eraserBtn = $("<div/>");
    eraserBtn.addClass("operation-btn");
    eraserBtn.attr("id", "erase-btn");
    eraserBtn.appendTo(colorPalette);
    var brushBtn = $("<div/>");
    brushBtn.addClass("operation-btn");
    brushBtn.attr("id", "brush-btn");
    brushBtn.appendTo(colorPalette);
    var increaseBrushSize = $("<div/>");
    increaseBrushSize.addClass("operation-btn");
    increaseBrushSize.attr("id", "increase-brush");
    increaseBrushSize.text("+");
    increaseBrushSize.appendTo(colorPalette)
    var decreaseBrushSize = $("<div/>");
    decreaseBrushSize.addClass("operation-btn");
    decreaseBrushSize.attr("id", "decrease-brush");
    decreaseBrushSize.text("-");
    decreaseBrushSize.appendTo(colorPalette)
    var clearBtn = $("<div/>");
    clearBtn.addClass("operation-btn");
    clearBtn.attr("id", "clear-canvas");
    clearBtn.text("CLEAR");
    clearBtn.appendTo(colorPalette);
  },
  getCanvasInfo: function() {
    var welcomeModal = $("<div/>");
    welcomeModal.addClass("modal");
    welcomeModal.attr("id","welcome-modal");
    welcomeModal.appendTo("body");
    var welcomeMsg = $("<div/>");
    welcomeMsg.attr("id", "welcome-message");
    welcomeMsg.text("Welcome to Paint! Create your canvas:");
    welcomeMsg.appendTo(welcomeModal);
    var paintingName = $("<input/>");
    paintingName.addClass("canvas-input");
    paintingName.attr("id", "painting-name-input");
    paintingName.attr("placeholder", "name (default: untitled)");
    var heightInput = $("<input/>");
    heightInput.addClass("canvas-input");
    heightInput.attr("id", "height-input");
    heightInput.attr("placeholder", "height (default: 500)");
    var widthInput = $("<input/>");
    widthInput.addClass("canvas-input");
    widthInput.attr("id", "width-input");
    widthInput.attr("placeholder", "width (default: 500)");
    paintingName.appendTo("#welcome-message");
    heightInput.appendTo("#welcome-message");
    widthInput.appendTo("#welcome-message");
    var startButton = $("<button/>");
    startButton.attr("id", "start-button");
    startButton.text("Let's GO!").appendTo("#welcome-message");
  },
  drawing: function(dotX,dotY) {
    if (paint95.brush.brushOn) {
      var dot = $("<div/>");
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
      var dot = $("<div/>");
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
  if ($("#height-input").val() !== "" && !isNaN($("#width-input").val())) {
    paint95.canvas.height = $("#height-input").val();
  }
  if ($("#width-input").val() !== "" && !isNaN($("#width-input").val())) {
    paint95.canvas.width = $("#width-input").val();
  }
  if ($("#painting-name-input").val() !== "") {
    paint95.canvas.name = $("#painting-name-input").val();
  }
  $("#welcome-modal").css("display", "none");
  $("#canvas").css("height", `${paint95.canvas.height}px`);
  $("#canvas").css("width", `${paint95.canvas.width}px`);
  $("#paint-title").text(`${paint95.canvas.name} - ${paint95.meta.title}`);
});

$("#canvas").on("mousedown", function(e) {
  var dotPosY = e.pageY - $("#canvas").offset().top;
  var dotPosX = e.pageX - $("#canvas").offset().left;
  if (paint95.brush.brushOn) {
    paint95.brush.isDrawing = true;
    paint95.drawing(dotPosX,dotPosY);
  } else {
    paint95.brush.isErasing = true;
    paint95.erasing(dotPosX,dotPosY);
  }
});

$("#canvas").on("mousemove", function(e) {
  var dotPosY = e.pageY - $("#canvas").offset().top;
  var dotPosX = e.pageX - $("#canvas").offset().left;
  if (paint95.brush.brushOn && paint95.brush.isDrawing) {
    paint95.drawing(dotPosX,dotPosY);
  } else  if (paint95.brush.eraserOn && paint95.brush.isErasing) {
    paint95.erasing(dotPosX,dotPosY);
  }
});

$(".dot").on("mousedown", function(e) {
  if (eraserOn) {
    e.target.remove();
  }
})

$(document).on("mouseup", function() {
  if (paint95.brush.brushOn) {
    paint95.brush.isDrawing = false;
  } else if (paint95.brush.eraserOn) {
    paint95.brush.isErasing = false;
  }
});

$(".color-in-palette").click(function(e) {
  var targetColor = $(e.target).css("background-color");
  paint95.brush.colorOnBrush = targetColor;
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
  paint95.brush.width += 2;
})

$("#decrease-brush").click(function() {
  paint95.brush.width -= 2;
})