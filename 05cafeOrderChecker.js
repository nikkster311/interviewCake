arr1 = [17, 8, 24, 22, 4]
arr2 = [12, 19, 2, 5]
arr3 = [17, 8, 12, 19, 24, 2, 22, 4, 5]



function check(arr1, arr2, arr3) {
  let a = 0;
  let b = 0;
  let c = 0;
  console.log("running check")
  for (; c < arr3.length; c++) { //while we have numbers to check in both arrays
    console.log("start " + c)
    if (a < arr1.length && arr3[c] === arr1[a]) { //if the next served orders is the next in arr1
      a++; //move on to the next in arr1
    } else if (b < arr2.length && arr3[c] === arr2[b]){ //if the next served orders is the next in arr2
      b++; //move on to the next in arr2
    } else { //if it doesn't match
      console.log("false")
      return false; //our system is messed up!
    }
    console.log("end " + c)
  }
  if (c === arr3.length) { //if we've checked everything and haven't gotten false
    if (b === arr2.length && a === arr1.length) { //check to see if we missed any orders
      console.log("we got through all the orders!")
      return true;  //our system works!
    } else {
      console.log("whoops, we missed something")
      return false;  //our system doesn't work!
    }

  }
}

check(arr1, arr2, arr3);
