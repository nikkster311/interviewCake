const message = [ 'c', 'a', 'k', 'e', ' ',
              'p', 'o', 'u', 'n', 'd', ' ',
              's', 't', 'e', 'a', 'l' ];



// find the spaces, record index, list in an array
// for each item in spacesArray, that will be the end of one word and the start of another.

function reverseWords(arr) {
let newA = [];
let word = [arr[0]];
for (let i = 1; i < arr.length; i++) {
  console.log(" I = " + i)
  // let startWordIndex === 0; //we will record the index of the last space here
  if (arr[i] === " " || i === arr.length-1) { //if a space,
    word.push(arr[i]); //add space to word
    console.log(word)
    newA.unshift(word); //add word to front of newA
    console.log(newA)
    word = []; //delete word
  } else { //if not a space, append to newA
    word.push(arr[i]);
    console.log(arr[i])
  }
}
  console.log("new A is ")
  console.log(newA)
  arr = newA
  console.log(" message is ")
  console.log (arr)
  console.log(arr.join(','))
  return arr


}




reverseWords(message);

              console.log(message.join(''))
