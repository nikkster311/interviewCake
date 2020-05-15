const message = [ 'c', 'a', 'k', 'e', ' ',
              'p', 'o', 'u', 'n', 'd', ' ',
              's', 't', 'e', 'a', 'l' ];

function swap(leftIndex, rightIndex, arr, left) {
  console.log("running swap")
  while(leftIndex < rightIndex) {
    console.log(leftIndex + " , " + rightIndex + " = li, ri")
    left = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = left;
    leftIndex++;
    rightIndex--;
  }
  return arr;
  console.log("swap done")
  console.log(arr)
}
function reverseLetters(leftIndex, rightIndex, arr, left){
let i = 0;
let count = 0;
console.log(arr)
console.log("running reverseLetters")
while (i<arr.length) {
  console.log(" i = " + i)
  if (arr[i] != " ") {
    count++;
    i++;
    console.log(count + " = count")
    console.log("i++,  i = " + i)

  }
  if (arr[i] === " ") {
    leftIndex = i-count;
    rightIndex = i-1;
    console.log(leftIndex + " , " + rightIndex + " = li, ri")
    swap(leftIndex, rightIndex, arr);
    count = 0;
    i++;
    console.log(count + " = count")
    console.log("i++,  i = " + i)
  }
  if (i === arr.length-1) {
    leftIndex = i-count;
    rightIndex = i;
    console.log(leftIndex + " , " + rightIndex + " = li, ri")
    swap(leftIndex, rightIndex, arr);
    count = 0;
    i++;
    console.log(count + " = count")
    console.log("i++,  i = " + i)
  }
}
}


function reverseWords(arr) {
  leftIndex = 0;
  rightIndex = arr.length - 1;
  let left;

  swap(leftIndex, rightIndex, arr, left);
  console.log("first swap done")
  console.log(arr)
  console.log("running for loop")
  console.log(arr.length)
  reverseLetters(leftIndex, rightIndex, arr, left)
  console.log("done reversing letters")
  console.log(arr)
}

console.log(message.join(""))
reverseWords(message);
console.log(message.join(""))
