myArray = [12, 234, 56, 12,
  3, 5, 5, 6, 3,
   24, 3, 54, 5, 456, 34, 3, 2, 5, 1]

function mergesort(a) {
  if (a.length<2) { //if the array only has one item, just return it
    return a
  } else {
    var mid = Math.floor(a.length/2);
    console.log("mid = " + mid)
    var left = a.slice(0, mid);
    var right = a.slice(mid);
    console.log("left: ")
    console.log(left)
    console.log("right: ")
    console.log(right)
    return merge(mergesort(left), mergesort(right)
  );
}

function merge(left, right) {
    console.log("RUNNING MERGE with " + left + " left and right " + right)
    var lIndex = 0;
    var rIndex = 0;
    var newA = [];
    while (lIndex < left.length && rIndex < right.length) { //while right and left are not empty
      console.log(`left = ${left[lIndex]}, right = ${right[rIndex]}`)
      if (left[lIndex] <= right[rIndex]) { //if the number on the left is smaller or equal to that on the right
        // console.log(`LLLLL _ LEFT ${left[j]} <= ${right[k]}`)
        newA.push(left[lIndex]); //add the num in left list to a
        lIndex++; //increment j
      } else {
        // console.log(`RRRRR _ RIGHT ${left[j]} <= ${right[k]}`)
        newA.push(right[rIndex]); //otherwise, add the num in the right list to a
        rIndex++; //increment k
      }
      console.log(newA);
    }
    while (lIndex < left.length) { //if right is empty but left isn't
      console.log("right is empty, left = " + left[lIndex])
      newA.push(left[lIndex]); //add to a until left is empty
      lIndex++
      console.log(newA);

    }
    while (rIndex < right.length) { //if left is empty but right isn't
      console.log("left is empty, right = " + right[rIndex])
      newA.push(right[rIndex]); //add to a until right is empty
      rIndex++
      console.log(newA);

    }
    return newA;
    console.log(newA)
    console.log("MERGE COMPLETE")
  }
}

mergesort(myArray);
console.log(myArray);
