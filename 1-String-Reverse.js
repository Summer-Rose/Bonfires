function reverseString(str) {
  strArray = str.split("");
  arrayReverse = strArray.reverse();
  wordReversed = arrayReverse.join("");
  return wordReversed;
}
reverseString('hello');