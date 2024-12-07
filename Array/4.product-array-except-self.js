function productExceptSelf(nums) {
    const output = new Array(nums.length).fill(1);
    
    let leftProduct = 1;
    for (let i = 0; i < nums.length; i++) {
        output[i] *= leftProduct;
        leftProduct *= nums[i];
    }

    let rightProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return output;
}

const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // Output: [24, 12, 8, 6]
