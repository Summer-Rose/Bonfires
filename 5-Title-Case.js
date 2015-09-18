function titleCase(str) {
  var string = str.toLowerCase();
  var splitStr = string.split(" ");
  var newArray = [];
  for (var i = 0; i < splitStr.length; i++) {
    var bigLetter = splitStr[i].charAt(0).toUpperCase();
    var word = bigLetter + splitStr[i].slice(1, splitStr[i].length);
    newArray.push(word);
  }
  return newArray.join(" ");
}

titleCase("I'm a little tea pot");