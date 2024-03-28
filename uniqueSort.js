const uniqueSort = arr => {
    const hashMap = {};
    hashMap[arr[0]] = true;
    let noDupsArray = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (!hashMap[arr[i]]) {
            hashMap[arr[i]] = true;
            noDupsArray.push(arr[i]);
        }
    }
    return noDupsArray.sort((a, b) => a - b);
}

const sortedUniqueArray = uniqueSort([1, 2, 4, 3, 2, 1, 4, 5, 6, 5, 5, 5]) // [1, 2, 3, 4, 5, 6]  
console.log(sortedUniqueArray);