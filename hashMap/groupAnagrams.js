// Group Anagrams
// Write a function groupAnagrams(strs) that groups strings that are anagrams of each other. An anagram is a word formed by rearranging the letters of another word.
// For example:
// Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]
// This problem is great for practicing hashmaps because you need to:

// Create a key that uniquely identifies each anagram group
// Use that key to group strings together efficiently

// PRACTICE:

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

function groupAnagrams (strs) {

}

// SOLUTION:

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

function groupAnagrams(strs) {
    let anagramGroups = {}

    for (let i = 0; i < strs.length; i++) {
        const sortedStr = strs[i].split('').sort().join('')
        if (anagramGroups[sortedStr]) {
            anagramGroups[sortedStr].push(strs[i])
        } else {
            anagramGroups[sortedStr] = [strs[i]]
        }
    }
    return Object.values(anagramGroups)
}