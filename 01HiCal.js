myArray =   [
  { startTime: 0,  endTime: 1 },
  { startTime: 4,  endTime: 5 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 3,  endTime: 6 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
];

secondArray =   [
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
  { startTime: 7, endTime: 9 },
];

var newA = [];

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
    newA = [];
    while (lIndex < left.length && rIndex < right.length) { //while right and left are not empty
      console.log(`left = ${left[lIndex].startTime}, right = ${right[rIndex].startTime}`)
      if (left[lIndex].startTime <= right[rIndex].startTime) { //if the number on the left is smaller or equal to that on the right
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

function mergetimes(a) {
  for (var i=0; i+1<a.length; i++) { //search through all indices
    console.log(i)
    console.log("IIIIIIIIIIIII")
    if (a[i].endTime >= a[i+1].startTime) { //if overlap
      console.log("a i endTime= " + a[i].endTime)
      console.log("a i+1 enditme " + a[i+1].endTime)
      if (a[i].endTime >= a[i+1].endTime) { //if one meeting is happening the entire time another one is in session
        a.splice(i+1, 1); //delete the whole shorter meeting
        i--;
      } else {
        a[i].endTime = a[i+1].endTime; //replace end time of the earlier meeting

        console.log(a[i])
        console.log("^^^ A[i]")
        a.splice(i+1, 1); //delete the later meeting
        i--; //check that line again
        console.log(a)
      }
    }
  }
  return(a);
}


mergesort(secondArray);

console.log('done')
console.log(newA);

console.log("running mergetimes")
mergetimes(newA);
console.log(newA);
