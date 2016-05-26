/*
## De-dup

Given an array of numbers or strings, create a new array containing the same elements as the first array, except with any duplicate values removed. Print the array. #array #loop #medium
*/

/* AFTER */

function sortArray(arr) {
  return arr.slice().sort();
}

function removeDups(hasDupsArray) {
  var previousElement;
  //sort a copy of the array, that's why we use slice
  var sortedArray = sortArray(hasDupsArray);

  //loop through the array looking for the current element matching the previous element
  for (var i = 0; i < sortedArray.length; i++) {
    //if a match is found
    if (sortedArray[i] === previousElement) {
      //remove the element at i
      sortedArray.splice(i, 1);
      //keep i the same as we've just shifted the array because of splice
      i--;
    }
    previousElement = sortedArray[i];
  }
  return sortedArray;
}

console.log(removeDups(["one", "two", "three", "two", "four", "four", "four"]));
console.log(removeDups([1, 3, 6, 7, 6, 10, 6]));


////////////////////////////////////////////////////////////////////////////////
/* BEFORE
//var removeMyDups = [1, 3, 6, 7, 6, 10, 6];
var removeMyDups = ["one", "two", "three", "two", "four", "four", "four"];
var previousElement;

//sort a copy of the array, that's why we use slice
var sortedArray = removeMyDups.slice().sort();

//loop through the array looking for the current element matching the previous element
for (var i = 0; i < sortedArray.length; i++) {
  //if a match is found
  if (sortedArray[i] === previousElement) {
    //remove the element at i
    sortedArray.splice(i, 1);
    //keep i the same as we've just shifted the array because of splice
    i--;
  }
  previousElement = sortedArray[i];
}

console.log(sortedArray);
*/
