function findMin(nums) {
    let left = 0,
        right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] > nums[right]) {
            left = mid + 1; // Minimum must be on right side.
        } else {
            right = mid; // Minimum could be mid or on left side.
        }
    }

    return nums[left];
}

const nums = [3,4,5,1,2];
console.log(findMin(nums)); // Output: 1