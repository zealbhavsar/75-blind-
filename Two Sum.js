// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]coded in js 


function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// Brute Force Solution (O(n²))
// function twoSumBrute(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }

// // Example
// console.log(twoSumBrute([2, 7, 11, 15], 9));  // [0,1]
// console.log(twoSumBrute([3, 2, 4], 6));       // [1,2]
// console.log(twoSumBrute([3, 3], 6));          // [0,1]


two subtract sum 
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);

continous number increment '
    function continuousNumbers(n = 5) {
  let out = "";
  let num = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      out += num + " ";
      num++;
    }
    out += "\n";
  }
  console.log(out);
}

continuousNumbers(5);

find largest number 

let arr = [10, 45, 32, 67, 89];
let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log("Largest element:", largest);

let str = "madam";
let reversed = str.split("").reverse().join("");

if (str === reversed) {
  console.log(str, "is a palindrome");
} else {
  console.log(str, "is not a palindrome");
}


