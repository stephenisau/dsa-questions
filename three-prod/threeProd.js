/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    
    if (nums.length < 3) {
        return 0;
    }
    
    let min1 = Infinity;
    let min2 = Infinity;
    
    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;
    
    // Need to account for 2 negative numbers 
    for (let i = 0; i < nums.length; i++) {
        
        if (nums[i] >= max1) {
            // swap all max values, set largest max to be curr element
            max3 = max2;
            max2 = max1;
            max1 = nums[i]
        } else if (nums[i] > max2) {
            max3 = max2;
            max2 = nums[i];
        } else if (nums[i] > max3) {
            max3 = nums[i]
        }
        
        
        
        if (nums[i] < min1 ) {
            min2 = min1
            min1 = nums[i];
        } else if (nums[i] <= min2) {
            min2 = nums[i]
        }
    }
    
    return Math.max(min1 * min2 * max1, max1 * max2 * max3);
};
