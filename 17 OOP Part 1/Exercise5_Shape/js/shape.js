class Shape {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
};

let cir = new Shape("circle","yellow");
let squ = new Shape("square", "green");
cir.radius = 3;
squ.edgeLength = 5;
squ.calcArea = function(edgeLen) {
  return edgeLen*2;
};
cir.calcArea = function(rad) {
  return rad*Math.PI;
};

function calcShapeArea(shape) {
  if (shape.type === "circle") {
    return shape.radius*Math.PI;
  } else if (shape.type === "square") {
    return shape.edgeLength*2;
  }
};

console.log(calcShapeArea(cir));
console.log(calcShapeArea(squ));

squ.calcArea2 = function() {
  return this.edgeLength*2;
};

cir.calcArea2 = function() {
  return this.radius*Math.PI;
};

function calcShapeArea2(shape) {
  return shape.calcArea2.call(shape);
};