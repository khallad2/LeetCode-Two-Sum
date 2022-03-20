/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    let hold = 0;
      if(nums.length <= 0){
          return nums
      }  else {
          for(var i=0; i< nums.length; i++) {
              hold = target - nums[i];
              for(var k= i+1; k < nums.length; k++){
                  if(nums[k] === hold){
                      result.push(i);
                      result.push(k);
                  }
              }
          }
          return result;
      }

};
