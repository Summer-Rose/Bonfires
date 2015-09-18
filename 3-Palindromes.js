function palindrome(str) {
  var lowerNoPuncStr =  str.replace(/[^\w]|_/g, "").toLowerCase();
  var reverse = lowerNoPuncStr.split('').reverse().join('');
  if (lowerNoPuncStr == reverse) {
    return true;
  } else {
    return false;
  }
}
palindrome("eye");