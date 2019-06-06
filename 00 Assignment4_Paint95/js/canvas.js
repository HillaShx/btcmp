var paint95 = {
  meta: {
    title: "Paint"
  },
  canvas: {
    name: "untitled",
    width: "500px",
    height: "500px",
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
    width: 1,
  }
}

function initPaint() { 
  var paintHeader = $("<div/>");
  paintHeader.addClass("header");
  var paintingTitle = $("<h1/>");
  paintingTitle.text(`${paint95.canvas.name} - ${paint95.meta.title}`);
  var canvas = $("<div/>");
  canvas.attr("id","canvas");
  canvas.css("width", paint95.canvas.width);
  canvas.css("height", paint95.canvas.height);
  canvas.css("background-color", paint95.canvas.backgroundColor);
  paintingTitle.appendTo(paintHeader);
  paintHeader.appendTo("body");
  canvas.appendTo("body");
  colorOnBrush = initPalette();
}

function initPalette() {
  var colorPalette = $("<div/>");
  colorPalette.attr("id", "color-palette");
  for (var i=0; i<paint95.colorPalette.length; i++) {
    var currColor = $("<div/>");
    currColor.addClass("color-in-palette");
    currColor.css("background-color", paint95.colorPalette[i]);
    currColor.appendTo(colorPalette);
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
}

initPaint();

var isClicked = false;


function drawing(dotX,dotY) {
  if (isClicked) {
    var dot = $("<div/>");
    dot.attr("class", "dot");
    dot.css("background-color", paint95.brush.colorOnBrush);
    dot.css("top", dotY + "px");
    dot.css("left", dotX + "px");
    dot.appendTo($("#canvas"));
  }  
}


$("#canvas").on("mousedown", function(e) {
  isClicked = true;
  var dotPosY = e.pageY - $("#canvas").offset().top;
  var dotPosX = e.pageX - $("#canvas").offset().left;
  drawing(dotPosX,dotPosY);
 
});


$("#canvas").on("mousemove", function(e) {
  var dotPosY = e.pageY - $("#canvas").offset().top;
  var dotPosX = e.pageX - $("#canvas").offset().left;
  drawing(dotPosX,dotPosY);
});

$(document).on("mouseup", function() {
  isClicked = false;
});

