// @ts-nocheck
// This is a JavaScript coding problem from BFE.dev
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  const flatHelper = (arr, res) => {
    arr.forEach((ele) => {
      if (Array.isArray(ele)) {
        flatHelper(ele, result);
      } else {
        result.push(ele);
      }
    });
    return result;
  };

  let result = [];
  arr.forEach((ele) => {
    if (Array.isArray(ele)) {
      flatHelper(ele, result);
    } else {
      result.push(ele);
    }
  });
  return result;
}
if (!Array.prototype.MyflatMap) {
  Array.prototype.MyflatMap = function () {
    console.log("inside myFlatMap", this);
    return flat(this, 0);
  };
}
const arr = [1, [2], [3, [4, [5, [6, 7, [8, 9]]]]]];
console.log(arr.flat());
console.log(arr.MyflatMap());
