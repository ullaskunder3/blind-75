def contains_duplicate(arr):
    seen = set()
    for num in arr:
        if num in seen:
            return True
        seen.add(num)
    return False

arr = [1, 2, 3, 1]
print(contains_duplicate(arr))  # Output: True