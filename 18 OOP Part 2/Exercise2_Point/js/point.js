class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  };

  plus(otherPoint) {
    return {
      x: this.x + otherPoint.x,
      y: this.y + otherPoint.y
    }
  }
}