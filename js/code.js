
//Q4a
function sum(arrayOfNumber){
    var result = arrayOfNumber.reduce((a, b) => a + b, 0);
    return result;
}

//Q4b
function multiply(arrayOfNumber){
    var result = arrayOfNumber.reduce((a, b) => a * b);
    return result;
}

//Q5
function reverse(word){
    var result = word.split("").reverse().join("");
    return result;
}

//Q7
function filterLongWords(arrayOfWord, size){
    var result = arrayOfWord.filter(x => x.length > size);
    return JSON.stringify(result);
}


function longestNoSpace(...args){
    return args.filter(a => a.length > countWords(args));
}

function countWords(word){
    return word.split(' ').length;
}