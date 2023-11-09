// 2.Do the below programs in arrow functions.

//Print odd numbers in an array
const printOddNumbers = (arr) => {
    arr.forEach((num) => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  printOddNumbers(numbers);
  
  
  //Convert all the strings to title caps in a string array
  const convertToTitleCaps = (arr) => {
    const titleCapsArray = arr.map((str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
    console.log(titleCapsArray);
  };
  
  const strings = ["hello", "world", "javascript"];
  convertToTitleCaps(strings);
  
  
  //Sum of all numbers in an array
  const sumOfNumbers = (arr) => {
    const sum = arr.reduce((total, num) => {
      return total + num;
    }, 0);
    console.log(sum);
  };
  
  const numberss = [44, 55, 66, 77, 88];
  sumOfNumbers(numberss);
  
  
  //Return All Prime Numbers in an Array
  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  
  const getPrimeNumbers = (arr) => {
    const primeNumbers = arr.filter((num) => {
      return isPrime(num);
    });
    console.log(primeNumbers);
  };
  
  const numnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  getPrimeNumbers(numnum);
  
  
  //Return All Palindromes in an Array
  const isPalindrome = (str) => {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  };
  
  const getPalindromes = (arr) => {
    const palindromes = arr.filter((str) => {
      return isPalindrome(str);
    });
    console.log(palindromes);
  };
  
  const tags = ["level", "hello", "madam", "world"];
  getPalindromes(tags);
  