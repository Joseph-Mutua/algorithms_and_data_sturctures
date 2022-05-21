// You're working on a secret team solving coded transmissions.
// Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.
// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place.

function reverseCharacters(message, leftIndex, rightIndex) {
  // Walk towards the middle, from both sides
  while (leftIndex < rightIndex) {
    // Swap the left char and right char
    let temp = message[leftIndex];
    message[leftIndex] = message[rightIndex];
    message[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }
}

const reverseWords = (message) => {
  // First we reverse all the characters in the entire message
  // This gives us the right word order
  // but with each word backward
  reverseCharacters(message, 0, message.length - 1);

  // Now we'll make the words forward again
  // by reversing each word's characters

  // We hold the index of the *start* of the current word
  // as we look for the *end* of the current word
  let currentWordStartIndex = 0;
  for (let i = 0; i <= message.length; i++) {
    // Found the end of the current word!
    if (i === message.length || message[i] === " ") {

    // If we haven't exhausted the string our
    // next word's start is one character ahead
      reverseCharacters(message, currentWordStartIndex, i - 1);

      currentWordStartIndex = i + 1;
    }
  }
};
