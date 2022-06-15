//Have the function WordSplit(strArr) read the array of strings stored in strArr,
// which will contain 2 elements: the first element will be a sequence of characters, 
//and the second element will be a long string of comma-seperated words, in alphabetical order, 
//that represents a dictionary of some arbitrary length. For example:
// strArr can be: ["hellocat", "apple, bat,cat,goodbye,hello,yellow,why"]. 
//Your goal is to determine if the first element in the input can be split into two words,
// where both words in the dictionary that is provided in the second input. In this example,
// the firs element can be split into two words: hello and cat because both of those words are
// in the dictionary. Your program should return the two words that exist in the dictionary seperated 
//by a comma. So for the example above, your program should return hello, cat. 
//There will only be one correct way to split the first element of characters into two words. If there is no way
// to split string into two words that exist in the dictionary, return the string not possible. 
//The first element itself will never exist in the dictionary as a real word.

function ArrayChallenge(strArr) {
  // code goes here
  let wordToCompare = strArr[0];
  let stringDictionary = strArr[1];

  let singleStrings = stringDictionary.split(",");

  let answerWords = "";

  singleStrings.map((firstWord) => {
    let splitMainWordArray = wordToCompare.split(firstWord);
    if (splitMainWordArray.length > 0) {
      splitMainWordArray.map((word) => {
        let joinedWord = firstWord + word;
        let reversedWord = [joinedWord].reverse().toString();

        if (joinedWord === wordToCompare || reversedWord === wordToCompare) {
          answerWords = "" + firstWord + "," + word + "";
        } else {
          return "Not Possible";
        }
      });
    }
  });
  return answerWords;
}