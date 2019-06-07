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
    isDrawing: false,
    width: 1,
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
  },
  drawing: function(dotX,dotY) {
    if (paint95.brush.isDrawing) {
      var dot = $("<div/>");
      dot.attr("class", "dot");
      dot.css("background-color", paint95.brush.colorOnBrush);
      dot.css("top", dotY + "px");
      dot.css("left", dotX + "px");
      dot.appendTo($("#canvas"));
    }
  },
  getCanvasInfo: function() {
    var modal = $("<div/>");
    modal.attr("id", "modal");
    modal.appendTo("body");
    var welcomeMsg = $("<div/>");
    welcomeMsg.attr("id", "welcome-message");
    welcomeMsg.text("Welcome to Paint! Create your canvas:");
    welcomeMsg.appendTo($("#modal"));
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
  }
}

paint95.initPaint();

$("#start-button").click(function() {
  if ($("#height-input").val() !== "") {
    paint95.canvas.height = $("#height-input").val();
  }
  if ($("#width-input").val() !== "") {
    paint95.canvas.width = $("#width-input").val();
  }
  if ($("#painting-name-input").val() !== "") {
    paint95.canvas.name = $("#painting-name-input").val();
  }
  $("#modal").css("display", "none");
  $("#canvas").css("height", `${paint95.canvas.height}px`);
  $("#canvas").css("width", `${paint95.canvas.width}px`);
  $("#paint-title").text(`${paint95.canvas.name} - ${paint95.meta.title}`);
});

$("#canvas").on("mousedown", function(e) {
  paint95.brush.isDrawing = true;
  var dotPosY = e.pageY - $("#canvas").offset().top;
  var dotPosX = e.pageX - $("#canvas").offset().left;
  paint95.drawing(dotPosX,dotPosY);
 
});

$("#canvas").on("mousemove", function(e) {
  var dotPosY = e.pageY - $("#canvas").offset().top;
  var dotPosX = e.pageX - $("#canvas").offset().left;
  paint95.drawing(dotPosX,dotPosY);
});

$(document).on("mouseup", function() {
  paint95.brush.isDrawing = false;
});

$(".color-in-palette").click(function(e) {
  var targetColor = $(e.target).css("background-color");
  paint95.brush.colorOnBrush = targetColor;
  $("#brush").css("background-color", targetColor);
})