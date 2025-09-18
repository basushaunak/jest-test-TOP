// A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”. 
// Read more about how a Caesar cipher works. Don’t forget to test wrapping from z to a. For example, 
// caesarCipher('xyz', 3) should return 'abc'. Don’t forget to test case preservation. The shifted lettercase should 
// follow the original lettercase. For example, caesarCipher('HeLLo', 3) should return 'KhOOr'. Don’t forget to test 
// punctuation. Punctuation, spaces, and other non-alphabetical characters should remain unchanged. For example, 
// caesarCipher('Hello, World!', 3) should return 'Khoor, Zruog!'. For this one, you may want to split the final function 
// into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function 
// you write… Just the public ones. So in this case you only need tests for the final caesarCipher function. 
// If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.

function caesarCipher(inputString, shiftBy) {
  let outputString = "";
  for(let i = 0;i<inputString.length;i++){
    outputString += cipherChar(inputString[i],shiftBy);
  }
  return outputString;

  function cipherChar(charToEncode,shiftBy){
    let code = charToEncode.charCodeAt(0);
    if(code >= 65 && code <= 90){ //Between A & Z
        code += shiftBy;
        if(code > 90){
            code = (code - 90 + 65) - 1;
        }else if(code < 65){
            code = 90-(65-code)+1;

        }
    } else
    if(code >= 97 && code <= 122){ //Between A & Z
        code += shiftBy;
        if(code > 122){
            code = (code - 122 + 97) - 1;
        }else if(code < 97){
            code = 122-(97-code)+1;

        }
    }
    return String.fromCharCode(code);
  }
}
