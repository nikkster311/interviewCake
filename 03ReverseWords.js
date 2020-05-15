const message = [ 'c', 'a', 'k', 'e', ' ',
              'p', 'o', 'u', 'n', 'd', ' ',
              's', 't', 'e', 'a', 'l' ];



// find the spaces, record index, list in an array
// for each item in spacesArray, that will be the end of one word and the start of another.

function reverseWords(arr) {
let newA = [];
let decoded = "";
let word = [arr[0]];
let wordStr = "";
for (let i = 1; i < arr.length; i++) {
  console.log(" I = " + i)
  // let startWordIndex === 0; //we will record the index of the last space here
  if (arr[i] === " ") { //if a space,
    // word.push(arr[i]); //add space to word
    console.log(word)
    newA.unshift(word); //add word to front of newA
    console.log(newA)
    word = []; //delete word
  } else if (i === arr.length-1) {
    word.push(arr[i]);
    newA.unshift(word);
    word = [];
  } else { //if not a space, append to newA
    word.push(arr[i]);
    console.log(arr[i])
  }
}
for (x=0; x < newA.length; x++) {
  console.log("x = " + x)
  console.log("newA.length = " + newA.length)
  wordStr = (newA[x].join(""))
  console.log("wordStr : ")
  console.log(wordStr)
  decoded = decoded.concat(wordStr, " ")
  console.log("Decoded = ")
  console.log(decoded)
}
  console.log("new A is ")
  console.log(newA)
  arr = newA
  console.log(" message is ")
  console.log (arr)
  console.log(arr[0].join(''))
  return arr


}




reverseWords(message);

              console.log(message.join(''))
