arr = ["A", "f", "o", "x", "!", "&"];

//write an array that takes the characters and reverses them in replace
function reverseArr(arr) {
var mid = Math.floor(arr.length/2); //cut in half to find the point where we stop swapping chars
let front = ""; //this is the char from the front of the list
let back = ""; //and the char from the back of the list
for (let i = 0; i < mid; i++){ //for each letter from the front and its pair from the back
  front = arr[i] //assign the "front" char
  back = arr[arr.length-(i+1)] //assign the "back" char (i+1 bc otherwise it is one number off, index wise)
  console.log(arr.length-(i+1))
  console.log(arr[i])
  console.log(arr[arr.length-(i+1)])
  arr[i] = back; //swap them
  arr[arr.length-(i+1)] = front; //swap
  console.log(arr)
}
return arr
console.log(arr)
};

reverseArr(arr);
console.log("done")
console.log(arr)



// 
// function reverse(arrayOfChars) {
//
// let leftIndex = 0;
// let rightIndex = arrayOfChars.length - 1;
//
// while (leftIndex < rightIndex) {
//
//   // Swap characters
//   const temp = arrayOfChars[leftIndex];
//   arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
//   arrayOfChars[rightIndex] = temp;
//
//   // Move towards middle
//   leftIndex++;
//   rightIndex--;
// }
// }
