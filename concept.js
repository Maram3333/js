function reverseString(str) {
    var reversed = ""; // Start with an empty string
    for (var i = str.length - 1; i >= 0; i--) { // Loop from the end of the string to the beginning
      reversed += str[i]; // Add each character to the reversed string
    }
    return reversed; // Return the reversed string
  }
  
  
  console.log(reverseString("hello")); // ➞ "olleh"

  function countCharacters(str) {
    var count = 0; // Initialize a counter
    for (var i = 0; i < str.length; i++) { // Loop through each character
      count++; // Increment the counter for each character
    }
    return count; // Return the total count
  }
  

  console.log(countCharacters("hello world")); // ➞ 11
  function capitalizeWords(sentence) {
    var words = sentence.split(" "); // Split the sentence into words
    for (var i = 0; i < words.length; i++) { // Loop through each word
      var word = words[i];
      words[i] = word[0].toUpperCase() + word.slice(1); // Capitalize the first letter of each word
    }
    return words.join(" "); // Join the words back into a sentence
  }
  

  console.log(capitalizeWords("hello world")); // ➞ "Hello World"



  function findMax(arr) {
    var max = arr[0]; // Assume the first element is the maximum
    for (var i = 1; i < arr.length; i++) { // Loop through the array
      if (arr[i] > max) {
        max = arr[i]; // Update max if the current element is greater
      }
    }
    return max; // Return the maximum value
  }
  
  function findMin(arr) {
    var min = arr[0]; // Assume the first element is the minimum
    for (var i = 1; i < arr.length; i++) { // Loop through the array
      if (arr[i] < min) {
        min = arr[i]; // Update min if the current element is smaller
      }
    }
    return min; // Return the minimum value
  }
  
  console.log(findMax([1, 2, 3, 4, 5]));
  console.log(findMin([1, 2, 3, 4, 5])); 


  function sumArray(arr) {
    var sum = 0; // Initialize sum to zero
    for (var i = 0; i < arr.length; i++) { // Loop through the array
      sum += arr[i]; // Add each element to the sum
    }
    return sum; // Return the total sum
  }
  
  
  console.log(sumArray([1, 2, 3, 4, 5])); 
  
  function filterArray(arr, threshold) {
    var result = []; // Start with an empty array
    for (var i = 0; i < arr.length; i++) { // Loop through the array
      if (arr[i] > threshold) { // Check if the element meets the condition
        result.push(arr[i]); // Add it to the result array if it does
      }
    }
    return result; // Return the filtered array
  }
  
  
  console.log(filterArray([1, 2, 3, 4, 5], 3)); 

  function factorial(n) {
    var result = 1; // Start with 1
    for (var i = 1; i <= n; i++) { // Loop from 1 to n
      result *= i; // Multiply result by the current number
    }
    return result; // Return the factorial
  }
  
  
  console.log(factorial(5)); 


  function isPrime(n) {
    if (n <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (var i = 2; i < n; i++) { // Loop from 2 to n-1
      if (n % i === 0) return false; // If divisible by i, it's not prime
    }
    return true; // If no divisors found, it's prime
  }
  
  
  console.log(isPrime(7)); 
  
  
  function fibonacci(n) {
    var fib = [0, 1]; // Start with the first two numbers
    for (var  i = 2; i < n; i++) { // Loop to generate the sequence
      fib.push(fib[i - 1] + fib[i - 2]); // Add the next number in the sequence
    }
    return fib.slice(0, n); // Return the sequence up to n terms
  }
  
  
  console.log(fibonacci(7)); 
  
  

    