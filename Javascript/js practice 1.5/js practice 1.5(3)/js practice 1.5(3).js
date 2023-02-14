// Case 3:
// Given an unsorted integer array nums, return the smallest missing positive integer.
// You must implement an algorithm that runs in O(n) time and uses constant extra space.
// Example 1:
// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.
// Example 2:
// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.
// Example 3:
// Input: nums = [7,8,9,11,12]
// Output: 1
// Explanation: The smallest positive integer 1 is missin
// let nums = [3,4,-1,1];
// let nums1 = [7,8,9,11,12];
// let nums2 = [1,2,0];

let nums = [3, 4, -1, 1];
let nums1 = [7, 8, 9, 11, 12];
let nums2 = [1, 2, 0];

let solution = (nums) => {

    let n = nums.length; // 4
    for (i = 0; i < n; i++) {

        element = nums[i]; // 1
        if (nums[i] >= 1 && nums[i] <= n) {
            orgPosition = element - 1; // 0

            if (nums[orgPosition] != element) { // 1->0 !
                let temp = nums[orgPosition];
                nums[orgPosition] = nums[i];
                nums[i] = temp;
                i--;
            }
        }
    }

    for (i = 0; i < n; i++) {
        if (1 + i != nums[i]) {
            return i + 1;
        }

    }
    return n + 1

}

console.log("Smallest Integer Missing in Array =" + solution(nums));
