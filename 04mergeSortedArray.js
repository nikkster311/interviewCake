const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

const mergedArray = [];

function mergeArrays(arr1, arr2, mergedArray) {
  let x = 0;
  let y = 0;
  while(x < arr1.length && y < arr2.length) { //while we haven't gone thru both arrays yet
    if (arr1[x] <= arr2[y]) { //if one is smaller or equal to the other
      mergedArray.push(arr1[x]); //add the one
      x++; //go to the next index in the first list
    } else {
      mergedArray.push(arr2[y]); //else, add the other
      y++; //go to the next index in the other
    }
  }
  while(x < arr1.length) {  //if we've exhausted everything in arr2
    mergedArray.push(arr1[x]); //add the rest from arr1
    x++; //one at a time
  }
  while(y < arr2.length) {  //if we've exhausted everything in arr1
    mergedArray.push(arr2[y]); //add the rest from arr2
    y++; //one at a time
  }
}

mergeArrays(myArray, alicesArray, mergedArray);
console.log(mergedArray)
