// A capitalize function that takes a string and returns it with the first character capitalized.
function titleCase(stringToCapitalize) {
  if (typeof stringToCapitalize !== "string") {
    return stringToCapitalize;
  }
  let wordArray = stringToCapitalize.split(" ");
  for (let i = 0; i < wordArray.length; i++) {
    wordArray[i] = capitalize(wordArray[i]);
  }
  return wordArray.join(" ");
}

function capitalize(stringWord) {
  if (typeof stringWord !== "string") {
    return stringWord;
  }
  stringWord = stringWord[0].toUpperCase() + stringWord.slice(1);
  return stringWord;
}
module.exports = { capitalize, titleCase };
