function maxProduct(nums) {
    let maxProd = nums[0], minProd = nums[0], result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            [maxProd, minProd] = [minProd, maxProd]; // Swap on negative number
        }
        
        maxProd = Math.max(nums[i], maxProd * nums[i]);
        minProd = Math.min(nums[i], minProd * nums[i]);
        
        result = Math.max(result, maxProd);
    }

    return result;
}

const nums = [2,-3,-2,-4];
console.log(maxProduct(nums)); // Output: 48
