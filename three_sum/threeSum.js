/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let output = [];
    
    // sort the array
    nums.sort((a, b) => (a - b));
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (i === 0 || nums[i] > nums[i - 1]) {
            let start = i + 1;
            let end = nums.length - 1;
            
            while (start < end) {
                // The three values sum up to zero, so push the three values to our ouytput array
                if (nums[i] + nums[start] + nums[end] === 0) {
                    output.push([nums[i], nums[start], nums[end]]);
                }
                
                // If the sum of the three elements are zero, we increment the start
                if (nums[i] + nums[start] + nums[end] < 0) {
                    let currStart = start;
                    while (nums[start] == nums[currStart] && start < end) {
                        start ++;
                    }
                } else {
                    // else we decrement the end;
                    let currEnd = end;
                    while (nums[end] == nums[currEnd] && start < end) {
                        end--;
                    }
                }            
            }
        }
    }
    return output
};
