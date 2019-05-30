function findSmallest(a, b, c) {
  if (a > c && b > c) {
    return c;
  }
  else if (a > c && a > b) {
    return a;
  } else {
    return b;
  }
}

findSmallest(52,66,2);