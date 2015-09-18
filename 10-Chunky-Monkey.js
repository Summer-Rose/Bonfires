function chunk(arr, size) {
  var multiArray = [];
  for (var i = 0; i < arr.length; i+=size) {
    var arrUnit = arr.slice(i, size + i);
    multiArray.push(arrUnit);
  }
  return multiArray;
}
chunk(["a", "b", "c", "d"], 2);