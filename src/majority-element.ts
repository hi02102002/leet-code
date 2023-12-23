function majorityElement(nums: number[]): number | void {
   const map: Record<number, number> = {};
   const max = nums.length / 2;

   for (let i = 0; i < nums.length; i++) {
      map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;

      if (map[nums[i]] > max) {
         return nums[i];
      }
   }
}
