function end(str, target) {
  var strArray = str.split(" ");
  var lastUnit = "";
  if (strArray.length === 1) {
    lastUnit = lastUnit.concat(str.substring(str.length - 1));
  } else {
    lastUnit = lastUnit.concat(strArray[strArray.length - 1]);
  }
  if (lastUnit == target) {
    return true;
  } else {
    return false;
  }
}

end("Bastian", "n", "");