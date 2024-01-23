function twoSum(nums: number[], target: number): number[] {
   const map = new Map();

   for (let i = 0; i < nums.length; i++) {
      if (!map.has(nums[i])) {
         map.set(target - nums[i], i);
      } else {
         return [map.get(nums[i]), i];
      }
   }

   return [];
}

console.log(twoSum([2, 7, 11, 15], 9));

// map : {} -> {7:0}
// [2,7,11,15] - 9
// i = 0 , map -> {7:0}
// i = 1, [0,1]
