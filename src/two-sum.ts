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
