function mutation(arr) {
  var string1 = arr[0].toLowerCase();
  var string2 = arr[1].toLowerCase().split("");
  
  for (var i = 0; i < string2.length;i++) {
    if (string1.indexOf(string2[i]) !== -1) { return true; } 
    else {
    return false;
    }
  }
};

mutation(["hello", "hey"]);