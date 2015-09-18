function repeat(str, num) {
  var repeat = "";
  for (var i = 0; i < num; i++) {
      if (num > 0) {
      repeat = repeat.concat(str);
    }
  }
  return repeat;
}
repeat("abc", 3, "");
