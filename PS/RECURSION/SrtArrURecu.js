
/** @DESCRIPTION - BELOW METHOD WILL HELP IN SORTING STACK OR ARRAY */

const insert = (arr, elm) => {
    if(arr.length === 0 || arr[arr.length -1] < elm) {
        arr.push(elm);
        return;
    }

    const tempElm = arr.pop();
    insert(arr, elm);
    arr.push(tempElm);
}

const sort = (arr) => {
    if(arr.length === 0) return;

    const tempElm = arr.pop();

    sort(arr);
    insert(arr, tempElm);
};

const arr = [3, 4, -1, -2, -10];
sort(arr);
console.log('Sorted Array Or Stack --->', arr);