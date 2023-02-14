// Given an integer array nums of length n and an integer target, find three integers in nums such 
// that the sum is closest to target.
// Return the sum of the three integers.
// You may assume that each input would have exactly one solution.
// Example 1:
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 
// + 1 = 2).
// Example 2:
// Input: nums = [3,2,-4,-1], target = -4
// Output: -3
// Explanation: The sum that is closest to the target is 2. (2 + -4 
// + -1 = -3)


let firNums = [-1, 2, 1, -4];
let secNums = [3, 2, -4, -1];

function target(num, target) {
    arr = [];
    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            for (let k = j + 1; k < num.length; k++) {
                let sum = num[i] + num[j] + num[k];
                arr.push(sum)
                console.log(
                    "sum Of  i = " + i + " ,j = " + j + " ,k = " + k + " th Element" + sum
                );
            }
        }
    }

    console.log(arr);
    let newarr = arr.map((x) => {
        return Math.abs(x - target);
    })
    newarr
    console.log(newarr);
    let x=Math.min.apply(Math, newarr);
    console.log(x)
    console.log(arr[newarr.indexOf(x)])
    
}

target(firNums, 1)
target(secNums, -4)