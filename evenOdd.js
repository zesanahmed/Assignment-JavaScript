// Problem-2
function evenOdd(string) {
    if (typeof string !== 'string') {
        return 'Please inter a string'
    }
    const stringNumber = string.length;
    if (stringNumber % 2 === 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}

// const test = evenOdd(34);
// console.log(test)

