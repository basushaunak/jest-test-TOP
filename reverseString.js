function reverseString(stringToReverse) {
  if (typeof stringToReverse !== "string") {
    return stringToReverse;
  }
  let returnString = "";
  for (let i = stringToReverse.length - 1; i >= 0; i--) {
    returnString += stringToReverse[i];
  }
  return returnString;
}

module.exports = reverseString;
