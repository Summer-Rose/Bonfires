function largestOfFour(arr) {
  var biggestArrs = [];
  
  for (var i = 0; i < arr.length; i++) {
    var tempBig = 0;
    for (var j = 0; j <arr.length; j++) {
      if (tempBig < arr[i][j]) {
        tempBig = arr[i][j];
      }
    }
    biggestArrs.push(tempBig);
  }
  return biggestArrs;
};

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);