function hasTargetSum(array, target) {
  complements = {};
  for (let i = 0; i < array.length; i++){
    if(complements[array[i]] !== undefined){
      return true;
    }
    complements[target - array[i]] = array[i];
  }
  return false;
}

/* 
O(3n + 2) time complexity which reduces to O(n)
*/

/*
function hasTargetSum:
  declare object complements;
  for each element in array:
    if 'element' in complements:
      return true;
    complements.(target - element) = element
  return false;
*/

/*
We have to take in an array of arbitrary length, possibly with duplicate elements
and/or negative numbers, and determine if any pair of numbers in the array add up
to equal our target number. Already it seems to me that an array is ill-suited for
this purpose because finding out whether a complement to the current element with 
respect to the target integer is in the array requires iterating through every 
element of the array. We can eliminate this by assigning all complement values (if 
target number is 7 and the current element is 3 the complement value would be 7-3=4)
to an object key, where the value is the current element. Then we can check in
constant time if each element after the current element in the array is a key which 
maps to a value in the object. This only requires iterating through the array once, 
and creating an object in memory which has as many key value pairs as there are elements 
in the array. If n is the number of elements in the array, then this code would execute 
in O(n) time and require O(n) space.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log('=>', hasTargetSum([4, 5, 6, 7, -4, -5, -8000, 17], -7983));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, -3, 3], 6))
}

module.exports = hasTargetSum;
