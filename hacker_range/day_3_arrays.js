/*
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
*/
//  İkinci en büyük sayıyı bulma
function getSecondLargest(nums) {
    nums.sort((a, b) => {
        return b - a;
    })
    return nums.find(j => {
        return nums[0] > j;
    });
}

const dizi = [9, 9, 8, 5];

console.log(getSecondLargest(dizi));