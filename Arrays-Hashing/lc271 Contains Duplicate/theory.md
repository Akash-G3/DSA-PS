# Contains Duplicate Problem

This project provides a solution to the **"Contains Duplicate"** problem using JavaScript. The goal is to determine if a given array contains any duplicate elements.

## 🧩 Problem Statement

Given an array of integers (or strings), return `true` if any value appears **at least twice**, and `false` if every element is **unique**.

### Example:
```js
Input: [1, 2, 3, 1]
Output: true

Input: [1, 2, 3, 4]
Output: false


## Approach used
We use a JavaScript `Map` to track whether each element has been seen before.

### Key Steps:

1. Initialize an empty `Map`.
    
2. Iterate through each element in the array.
    
3. For each element:
    
    - If it exists in the `Map`, return `true` (duplicate found).
        
    - Otherwise, add it to the `Map`.
        
4. If no duplicates are found after the loop, return `false`.