// @ts-nocheck
const mergeSort = (arr) => {

    const sort = (arr) => {
        console.log(`arr is ${arr}`);
        if (arr.length === 1) return arr;
        let start = 0;
        let middle = Math.floor(arr.length / 2);
        let left = sort(arr.slice(0, middle));
        let right = sort(arr.slice(middle));
        return merge(left, right);
    }

    const merge = (arr1, arr2) => {
        console.log(`merge called`);
        console.log(`arr1 is ${arr1}`);
        console.log(`arr2 is ${arr2}`);
        let i = 0;
        let j = 0;
        let mergedArray = [];
        while (i < arr1.length && j < arr2.length){
            // if(i<arr1.length && j<arr2.length){
                if (arr1[i] < arr2[j]) {
                    mergedArray.push(arr1[i]);
                    i++;
                } else {
                    mergedArray.push(arr2[j]);
                    j++;
                }
            //}
            // else if(i<arr1.length){
            //     mergedArray.push(arr1[i]);
            //     i++;
            // }
            // else if(j<arr2.length){
            //     mergedArray.push(arr2[j]);
            //     j++;
            // }
        }
        //merging the remaining elements left either in arr1 or arr2
        mergedArray = mergedArray.concat(arr1.slice(i)).concat(arr2.slice(j));
        console.log(`mergedArray is ${mergedArray}`);
        return mergedArray;
    }
    return sort(arr);
}

const arr = [1, 2, 4, 3, 2, 1, 4, 5, 6, 5, 5, 5]; // 1,1,2,2,3,4,4,5,5,5,5,6
console.log(mergeSort(arr));
const arr2 = [2,5,1,3,7,2,3,8,6,3];
console.log(mergeSort(arr2));