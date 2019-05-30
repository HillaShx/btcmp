function inRange (arr, min, max) {
  return arr.map(w => w>=min && w<=max ? w : arr.pop(w)).filter(u => u!==NaN);
}