function containsDuplicate(arr) {
    const seen = new Set();
    for (const num of arr) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}

const arr = [1, 2, 3, 1];
console.log(containsDuplicate(arr)); // Output: true