"strict"

//problem 1
function max(x , y){
    if(x > y){
        return x;
    }else{
        return y;
    }

}
console.log("Max number= " + max(3,5));

//problem 2

function maxOfThree(x, y, z){
    if(x > y && x > z){
        return x;
    }
    else if(y > x && y > z){
        return y;
    }else{
        return z;
    }
    
}
console.log("MaxOfThree= " +maxOfThree(4,2,6));


//problem 3

function isVowel(s){
    if('ieauo'.includes(s)){
        return true;
    }else{
        return false;
    }
}
console.log(isVowel('a'));



//problem 4
function sum(arrays){
    let total = 0;
    for(let i = 0; i < arrays.length; i++){
        total += arrays[i];
    }
    return total;
}
console.log("Sum= " + sum([1,2,3,5]));

//multiply
function multiply(arr){
    var total = 0;
    for(var i = 0; i < arr.length; i++){
        total *= arr[i];
    }
    return total;
}
console.log("Multiply= " + multiply([2,3,5,5]));

//prolem 5 reverse

function reverse(s){
    let str = '';
    for(let i = s.length-1; i >= 0; i--){
        str += s[i];
    }
    return str;
}
console.log("Revere= " + reverse('reverse'));

//problem 6 findLongestWord

function findLongestword(array){
    var longestWord = array.reduce(function(longest, word){
    if(word.length > longest.length){
        return word;
    }
    return longest;
  });
  return longestWord;
} 

console.log("findLongestWord= " + findLongestword(['naod', 'suzi', 'rafi', 'henoka']));

//problem 7

function filterLongWords(arr, i) {
    var holder = arr.filter(c => c.length > i);
    
    return holder;
}
console.log(filterLongWords(['naod', 'suzi', 'rafi', 'henoka'], 5));

//problem 8
function computeSumOfSquares(arr){
  var total = arr.map(x => x * x)
    .reduce((x, y)=> x + y);
    return total;
       }
       var total = computeSumOfSquares([1,2,3]);
    console.log(total);


//problem 9
function printOddNumbersOnly(arr){
    return arr.filter(x => x % 2 != 0);
}
console.log(printOddNumbersOnly([1,3,5,6,7,4,2]));

//problem 10
function computeSumOfSquaresOfEvensOnly(arr, multi){
    return arr.filter(x => x % 2 == 0).map(x => x * x)
    .reduce((x, y)=> x + y);
}
console.log(computeSumOfSquaresOfEvensOnly([1,2,3,4,5]));
    

//problem 11
function sum(arr){
  return  arr.reduce((x, y) => x + y);
    
}
console.log(sum([1,2,3,5]));

function multi(arr){
    return  arr.reduce((x, y)=> x * y);
}
console.log(multi([1,2,3,5]));

//problem 12
function findSecondBiggest(array){
    let firstmax = -Infinity, secondmax = -Infinity;
    array.forEach(e => {
        if (Number(e) > firstmax) {
            secondmax = firstmax;
            firstmax = Number(e);
        } else if (Number(e) > secondmax && Number(e) < firstmax) {
            secondmax = Number(e);
        }
    });
    return secondmax;
}
console.log("SecondBiggest  " + findSecondBiggest([1,2,3,4]));

//problem 13
function printFibo(n, a, b){
    for(let i = 0; i < n; i++){
      console.log(a);
      const sum = a + b;
      a = b;
      b = sum;
    }
    
    }
    
    printFibo(6,0,1);


