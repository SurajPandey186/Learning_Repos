
/** @DESCRIPTION - BELOW METHOD WILL HELP IN REVERSING THE ELEMENTS OF THE STACK */

const insert = (arr, elm) => {
    if(arr.length === 0) {
        arr.push(elm);
        return;
    }

    const tempElm = arr.pop();
    insert(arr, elm);
    arr.push(tempElm);
}

const reverseStack = (arr) => {
    if(arr.length === 1) return;

    const tempElm = arr.pop();

    reverseStack(arr);
    insert(arr, tempElm);
};


const stack = [3, 5];
reverseStack(stack);

console.log('AFTER REVERSE ---> ' + stack);