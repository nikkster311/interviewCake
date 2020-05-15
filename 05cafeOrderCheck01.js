arr1 = [17, 8, 24, 22, 4]
arr2 = [12, 19, 2, 5]
arr3 = [17, 8, 12, 19, 24, 2, 22, 4, 5]
var a = 0;
var b = 0;
var c = 0;
console.log(a)

function iterate(arr1, arr2, arr3, a, b, c) {
  // let a = 0;
  // let b = 0;
  console.log("iterating")
  console.log(a)
  console.log(b)
  console.log(c)
  if (arr3[c] === arr1[a]) { //if the next served orders is the next in arr1
    a = a++; //move on to the next in arr1
    console.log("a= " + a)
  } else if (arr3[c] === arr2[b]){ //if the next served orders is the next in arr2
    return b++; //move on to the next in arr2
    console.log(b)
  } else { //if it doesn't match
    console.log("false")
    return false; //our system is messed up!
  }
}

function check(arr1, arr2, arr3, a, b, c) {
  // let c = 0;
  console.log("running check")
  console.log(c)
  while (c < arr3.length) { //while we have numbers to check in both arrays
    console.log("running while..")
    console.log(c)
    iterate(arr1, arr2, arr3, a, b, c);
    c++; //,ove on to the next in served orders
  }
  // while(a < arr1.length) { //if we've exhausted everything in arr2
  //   iterate(arr1, arr2, arr3, a, b, c);
  // }
  // while(b < arr2.length) {
  //   iterate(arr1, arr2, arr3, a, b, c);
  // }
  if(c === arr3.length-1) { //if we've checked everything and haven't gotten false
  return true; //our system works!
  console.log("true")
}
if (b === arr2.length && a === arr1.length) {
  console.log("we got through all the orders!")
} else {
  console.log("whoops, we missed something")
}
}

check(arr1, arr2, arr3, a, b, c);
