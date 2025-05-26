(function() {
  // Prompt user for two strings
  const str1 = prompt("Enter the first string (e.g. RACECAR):");
  const str2 = prompt("Enter the second string (e.g. RECORDER):");
  
  function reverseString(str) {
    return str.split('').reverse().join('');
  }

  const reversedStr1 = reverseString(str1);
  const reversedStr2 = reverseString(str2);

  console.log("Original string 1: ", str1);
  console.log("Reversed string 1: ", reversedStr1);
  console.log("Is string 1 a palindrome? ", str1 === reversedStr1);

  console.log("Original string 2: ", str2);
  console.log("Reversed string 2: ", reversedStr2);
  console.log("Is string 2 a palindrome? ", str2 === reversedStr2);
})();