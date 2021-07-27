
//Q4a
function sumFunc(arrayOfNumber){
    var result = arrayOfNumber.reduce((a, b) => a + b, 0);
    return result;
}

//Q4b
function MultiplyFunc(arrayOfNumber){
    var result = arrayOfNumber.reduce((a, b) => a * b, 0);
    return result;
}

//Q5
function reverseFunc(word){
    var result = word.split("").reverse().join("");
    return result;
}

//Q7
function filterwordFunc(arrayOfWord, size){
    var result = arrayOfWord.filter(x => x.length > size);
    return result;
}