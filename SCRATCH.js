a = [12, 234, 56, 12,
  3, 5, 5, 6, 3,
   24, 3, 54, 5, 456, 34, 3, 2, 5, 1]
function split(a){
   var mid = Math.floor(a.length/2);
   console.log("mid = " + mid)
   var left = a.slice(0, mid);
   var right = a.slice(mid);
   console.log("left: ")
   console.log(left)
   console.log("right: ")
   console.log(right)
   return left, right
}

split(a);
