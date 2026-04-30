//through SET keyword which automatically removes duplicate items in an array
function duplicateRemoval(arr) {
  return [...new Set(arr)];
}
console.log(duplicateRemoval([0, 2, 2, 2, 3, 3, 4, 6, 6]));

//looping
function removeDuplicate(arr) {
  let result = [];
  console.log(result);
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
removeDuplicate([0, 1, 1, 2, 3, 3, 3, 4, 5]);

//function filter
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates([0, 1, 1, 2, 3, 3, 3, 4, 5]));
