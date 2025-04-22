// Group Anagrams
// Write a function groupAnagrams(strs) that groups strings that are anagrams of each other. An anagram is a word formed by rearranging the letters of another word.
// For example:
// Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]
// This problem is great for practicing hashmaps because you need to:

// Create a key that uniquely identifies each anagram group
// Use that key to group strings together efficiently

function groupAnagrams (strs) {
    const map = {}

    for(let i = 0; i < strs.length; i++) {
        const sortedStr = strs[i].split('').sort().join('')

        // check if the sorted str is already in our map
        if(map[sortedStr]) {
            map[sortedStr] = [strs[i]]
        } else {
            // if its not add it as a sorted array key with the str being it's corresponding value as an array
            map[sortedStr] = [strs[i]]
        }
    }
    // return each group of like strings, each to their own array, unique strings also get their own arrays (could modify to remove this)
    return Object.values(map)
}