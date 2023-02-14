// Case 1:
// Given an integer array nums that may contain duplicates, return all possible
// subsets
// (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.
// Example 1:
// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

let firNum = [1, 2, 2];
let secNum = [0]

function PowerSet(array) {

    const arr = [[]]

    for (let value of array) {
        const length = arr.length
        for (let i = 0; i < length; i++) {
            let temp = arr[i].slice(0)
            temp.push(value)
            arr.push(temp)
        }
    }

    return arr;
}

console.log(PowerSet(firNum))
console.log(PowerSet(secNum))
