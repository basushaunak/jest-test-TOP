// A capitalize function that takes a string and returns it with the first character capitalized.
function capitalize(stringToCapitalize) {
  if (typeof stringToCapitalize !== "string") {
    return stringToCapitalize;
  }
  let wordArray = stringToCapitalize.split(" ");
  for (let i = 0; i < wordArray.length; i++) {
    wordArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].slice(1);
  }
  return wordArray.join(" ");
}
module.exports = capitalize;
