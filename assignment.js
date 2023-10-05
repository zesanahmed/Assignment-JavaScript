// Problem-1
function mindGame(number) {
    if (typeof number !== 'number') {
        return 'Please inter a number'
    }


    const multiplication = number * 3;
    const addition = multiplication + 10;
    const division = addition / 2;
    const subtraction = division - 5;
    return subtraction;
}



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


// Problem-4
function findingBadData(numbers) {
    let badData = [];
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < 0) {
            badData.push(number);
        }
    }
    const badDataNumbers = badData.length;
    return badDataNumbers;
}


// Problem-5
function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {

    if (typeof firstFriend !== 'number' || typeof secondFriend !== 'number' || typeof thirdFriend !== 'number') {
        return 'Please inter a number'
    }


    const firstFriendGems = 21;
    const secondFriendGems = 32;
    const thirdFriendGems = 43;

    const firstFriendDiamonds = firstFriend * firstFriendGems;
    const secondFriendDiamonds = secondFriend * secondFriendGems;
    const thirdFriendDiamonds = thirdFriend * thirdFriendGems;

    const totalDiamonds = firstFriendDiamonds + secondFriendDiamonds + thirdFriendDiamonds;

    if (totalDiamonds > 1000 * 2) {
        const result = totalDiamonds - 2000;
        return result;
    }
    else {
        return totalDiamonds;
    }
}