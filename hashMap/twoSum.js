// twoSum 
// Two Sum Problem
// Write a function twoSum(nums, target) that takes an array of integers nums and an integer target. The function should return the indices of two numbers in the array that add up to the target.
// You can assume that:

// Each input has exactly one solution
// You may not use the same element twice
// You can return the answer in any order

// Example:
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1] (because nums[0] + nums[1] = 2 + 7 = 9)
// This is a perfect problem to practice hashmapping because while you could solve it with nested loops in O(n²) time, a hashmap approach gives you an efficient O(n) solution.

const nums = [2, 7, 11, 15]

const target = 9

function twoSum(nums, target) {

    let map = {}

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]

        if (map[complement] !== undefined) {
            return [map[complement], i]
        }

        map[nums[i]] = i
    }
    return null
}