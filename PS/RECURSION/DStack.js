
/** @DESCRIPTION - BELOW METHOD WILL HELP IN DELETING THE MIDDLE ELEMENT OF STACK */

const deleteMiddle = (s, pos) => {
    if (pos === 0) return;

    if (pos === 1) {
        s.pop();
        return;
    }

    let temp = s.pop();
    deleteMiddle(s, pos - 1);
    s.push(temp);
}

const stack = [1, 2, 3, 4, 5];
deleteMiddle(stack, Math.floor(stack.length / 2) + 1);

console.log('AFTER DELETION ---> ' + stack);