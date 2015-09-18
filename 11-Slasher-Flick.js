function slasher(arr, howMany) {
  var slashedArray = arr.splice(howMany, arr.length);
  return slashedArray;
}
slasher([1, 2, 3], 2, "");