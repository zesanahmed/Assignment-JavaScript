// Problem-3
function isLGSeven(number) {
    if (typeof number !== 'number') {
        return 'Please inter a number'
    }


    const subtraction = number - 7;
    if (subtraction < 7) {
        let result = number - 7;
        return result;
    }
    else {
        const multiplication = number * 2;
        return multiplication;
    }
}

// const test = isLGSeven(5);
// console.log(test)