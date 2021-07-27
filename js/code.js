
//Q4a
function sum(arrayOfNumber){
    var result = arrayOfNumber.reduce((a, b) => a + b, 0);
    return result;
}

//Q4b
function multiply(arrayOfNumber){
    var result = arrayOfNumber.reduce((a, b) => a * b, 0);
    return result;
}

//Q5
function reverse(word){
    var result = word.split("").reverse().join("");
    return result;
}

//Q7
function filterWord(arrayOfWord, size){
    var result = arrayOfWord.filter(x => x.length > size);
    return result;
}