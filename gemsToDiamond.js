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


const diamonds = gemsToDiamond('num', 200, 50);
console.log(diamonds);













