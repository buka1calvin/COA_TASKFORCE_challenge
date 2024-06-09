const stringTransform = (inputText) => {
  const length = inputText.length;

  //created a helper function which accept a parameter as a  number to check the divisibility of the input text by a given number
  const isDivisibleBy = (num) => length % num === 0;

  //here i'm checking the condtion if the length is divisible by 15 first of all

  if (isDivisibleBy(15)) {
    //here i created a reversed string
    const reversedInputText = inputText.split("").reverse().join("");
    //here i map through my splitted reversed string and replace each character with ASCII code
    return [...reversedInputText].map((char) => char.charCodeAt(0)).join(" ");
  }
  //here i'm checking if the length is divisible by 3 and return a reversed string
  if (isDivisibleBy(3)) {
    return inputText.split("").reverse().join("");
  }

  //here the divisisbility of input tstring length by 5 is checked and the string splitted and each caharacter is replaced by the ASCII code
  if (isDivisibleBy(5)) {
    return [...inputText].map((char) => char.charCodeAt(0)).join(" ");
  }
  //here if no condition is met the string is returned as it is 
  return inputText;
};
