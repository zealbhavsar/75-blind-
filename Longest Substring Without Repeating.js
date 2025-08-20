//Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// subtracting qithout repeING IN JS 
function lengthOfLongestSubstring(s) {
    let set = new Set();
    let left = 0, maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        // If character already exists, remove from left side
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

