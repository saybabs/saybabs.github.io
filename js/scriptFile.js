/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
  
  /* max returns the maximum of 2 arguments */
  // function max(a, b) {
  //   if (a > b) {
  //     return a;
  //   } else {
  //     return b;
  //   };
  // }
  //console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
  
  /* max3 takes 3 numbers as arguments and returns the largest */
  // function maxOfThree(a, b, c) {
  //   return max(max(a, b), c);
  
  // }
  
  //console.log("Expected output of maxOfThree(10,20,30) is 30  " + myFunctionTest(30, maxOfThree(10, 20, 30)));
  //console.log("Expected output of maxOfThree(10,20,30) is 30  " + myFunctionTest(20, maxOfThree(10,20,30)));
  
  //console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));
  
  
  //Q1
  function max(firstNumber, secondNumber){
      if(firstNumber > secondNumber){
          return firstNumber;
      }
      else{
          return secondNumber;
      }
  }
  console.log("Expected output for max(89, 99) is 99 " + myFunctionTest(99, max(89, 99)));
  console.assert(max(89,99) === 99, "Test assertion failed for max(89, 99)");
  
  
  //Q2
  function maxOfThree(firstNumber, secondNumber, thirdNumber){
      return max(max(firstNumber, secondNumber), thirdNumber);
  }
  console.log("Expected output for maxOfThree(79, 89, 90) is 90 " + myFunctionTest(90, maxOfThree(79, 89, 90)));
  console.assert(maxOfThree(79, 89, 90) === 90, "Test assertion failed for maxOfThree(79, 89, 90)");
  
  
  //Q3
  function isVowel(letter){
      const vowels = ['a', 'e', 'i', 'o', 'u']
  
      if(vowels.includes(letter)){
          return true;
      }
      else{
          return false;
      }
  }
  console.log("Expected output for isVowel(o) is true " + myFunctionTest(true, isVowel('o')));
  console.assert(isVowel('o') === true, "Test assertion failed for isVowel(o)");
  
  
  //Q4a
  function sum(arrayOfNumber){
      let result = 0;
      let arraySize = arrayOfNumber.length;
  
      if(arraySize < 0){
          return result;
      }
      for(let i = 0; i < arraySize; i++){
          result += arrayOfNumber[i]
      }
  
      return result;
  }
  console.log("Expected output for sum([1, 2, 3, 4]) is 10 " + myFunctionTest(10, sum([1, 2, 3, 4])));
  console.assert(sum([1, 2, 3, 4]) === 10, "Test assertion failed for sum([1, 2, 3, 4])");
  
  
  //Q4b
  function multiply(arrayOfNumber){
      var result = 0;
      let arraySize = arrayOfNumber.length;
  
      if(arraySize < 0){
          return result;
      }
  
      result = arrayOfNumber[0]
      for(let i = 0; i < arraySize; i++){
          result *= arrayOfNumber[i]
      }
  
      return result;
  }
  console.log("Expected output for multiply([1, 2, 3, 4]) is 24 " + myFunctionTest(24, multiply([1, 2, 3, 4])));
  console.assert(multiply([1, 2, 3, 4]) === 24, "Test assertion failed for multiply([1, 2, 3, 4])");
  
  
  function reverse(word){
      var result = "";
      let wordSize = word.length;
      
      for(let i = wordSize - 1; i >= 0; i--){
          result += word[i];
      }
      
      return result;
  }
  console.log("Expected output for reverse(shaggy) is yggahs " + myFunctionTest("yggahs", reverse("shaggy")));
  console.assert(reverse("shaggy") === "yggahs", "Test assertion failed for reverse(shaggy)");
  
  
  //Q6
  function findLongestWord(arrayOfWord){
      let result = 0;
      let arraySize = arrayOfWord.length;
  
      for (let i = 0; i < arraySize; i++) {
         if(result < arrayOfWord[i].length){
              result = arrayOfWord[i].length;
         } 
      }
      return result;
  }
  console.log("Expected output for findLongestWord(['John', 'Bryan', 'McManamman']) is 10 " + myFunctionTest(10, findLongestWord(['John', 'Bryan', 'McManamman'])));
  console.assert(findLongestWord(['John', 'Bryan', 'McManamman']) === 10, "Test assertion failed for findLongestWord(['John', 'Bryan', 'McManamman'])");
  
  
  //Q7
  function filterLongWords(arrayOfWord, size) {
      let result = [];
      let arraySize = arrayOfWord.length;
  
      for (let i = 0; i < arraySize; i++) {
          if(arrayOfWord[i].length > size){
              result[result.length++] = arrayOfWord[i];
          } 
      }
  
      return JSON.stringify(result);
  }
  console.log("Expected output for filterLongWords(['John', 'Bryan', 'McManamman'], 4) is Bryan,McManamman " + myFunctionTest(JSON.stringify(["Bryan", "McManamman"]), filterLongWords(['John', 'Bryan', 'McManamman'], 4)));
  console.assert(filterLongWords(["John", "Bryan", "McManamman"], 4) === JSON.stringify(["Bryan", "McManamman"]), "Test assertion failed for filterLongWords(['John', 'Bryan', 'McManamman'], 4)");
  
  
  //Q8
  const a = [1,3,5,3,3]; 
//   const b = a.map(function(elem, i, array) {
//     return elem + 3;
//   })
//   //document.writeln(b.toString() + "<br/>");
//   const c = a.filter(function(elem, i, array){
//     return elem !== 3;});
//   //document.writeln(c.toString() + "<br/>");
//   const d = a.reduce(function(prevValue, elem, i, array){
//     return prevValue + elem;
//   });
//   document.writeln(d+ "<br/>");
  
//   const d2 = a.find(function(elem) {return elem > 1;}); //3
//   const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
//   //document.writeln(d2+ "<br/>");
//   //document.writeln(d3);
  
  //Q8a
  function multiplyArrayByTen(elem){
      const result = a.map(function(elem, i, array) {
      return elem * 10;
  });
      return result.toString();
  }
  console.log("Expected output for multiplyArrayByTen[1,3,5,3,3] is 10,30,50,30,30 " + myFunctionTest(["10,30,50,30,30"].toString(), multiplyArrayByTen([1,3,5,3,3])));
  console.assert(multiplyArrayByTen([1,3,5,3,3]) === ["10,30,50,30,30"].toString(), "Test assertion failed for multiplyArrayByTen([1,3,5,3,3])");
  
  
  //Q8b
  function FilterByThree(elem){
      const result = a.filter(function(elem, i, array){
      return elem === 3;
  });
      return result.toString();
  }
  console.log("Expected output for FilterByThree[1,3,5,3,3] is 3,3,3 " + myFunctionTest(["3,3,3"].toString(), FilterByThree([1,3,5,3,3])));
  console.assert(FilterByThree([1,3,5,3,3]) === ["3,3,3"].toString(), "Test assertion failed for FilterByThree([1,3,5,3,3])");
  
  //Q8c
  function productOdAllElements(elem){
    const product = elem.reduce(function(x, elem, i, array){
      return x * elem;
    });
    return product;
  }
  console.log("Expected output for productOdAllElements[1,3,5,3,3] is 135 " + myFunctionTest(135, productOdAllElements([1,3,5,3,3])));
  console.assert(productOdAllElements([1,3,5,3,3]) === 135, "Test assertion failed for productOdAllElements([1,3,5,3,3])");


  function shortest(string1, string2, string3){
     return least(least(string1, string2), string3);
  }


    //helper function
    function least(first, second){
    if(first.length < second.length){
        return first;
    }
    else
    {
        return second;
    }
}

console.log("Expected output for shortest(['John', 'Bryan', 'McManamman']) is z " + myFunctionTest("z", shortest("hello", "z", "bye")));