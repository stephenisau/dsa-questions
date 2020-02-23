function maxSubarraySum(nums) {
    let maxSoFar = -Infinity
    let max = -Infinity
    for(let i = 0 ;i < nums.length; i++){
        let current = nums[i]
        maxSoFar = Math.max(current, current + maxSoFar)
        max = Math.max(max, maxSoFar)
    }
    return max
}
*/

// WITH RECURSION
function maxSubarraySum(nums) {
    let max = -Infinity;
    let temp = -Infinity;

    if (!nums.length) return 0;

    function _helper(arr) {
        if (arr.length === 0) return;

        for (let i = 0; i < arr.length; i++) {
            temp = _sumArr(arr);
            max = Math.max(temp, max);
            _helper(nums.slice(i+1, arr.length));
        }
    }
    _helper(nums);
    return max;
}

function _sumArr(arr) {
    let sum = 0;
    for (let n of arr) {
        sum += n;
    }
    return sum;
}
