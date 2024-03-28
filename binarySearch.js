const search = (arr,val) =>{
    if(arr.length === 0) return false;
    let start = 0;
    let end = arr.length - 1;
    const binarySearch=(arr,val,start,end) => {
        console.log(`start is ${start} and end is ${end}`);
        if(start > end) return {"found":false,foundAt:-1};
        let middle = Math.floor((start + end)/2);
        console.log(`middle is ${middle}`);
        console.log(`arr[middle] is ${arr[middle]}`);
        if(arr[middle] === val) return {"found":true,foundAt:middle};
        if(arr[middle] > val) return binarySearch(arr,val,start,middle-1);
        if(arr[middle] < val) return binarySearch(arr,val,middle+1,end);
    }
    return binarySearch(arr,val,start,end);
}

const arr = [1,2,3,4,5,6,7,8,9,10];
const val = 10;
console.log(search(arr,val));