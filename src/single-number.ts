function singleNumber(nums: number[]): number | void {
   if (nums.length === 1) return nums[0];

   const map: Record<number, number> = {};

   for (const num of nums) {
      map[num] = map[num] ? map[num] + 1 : 1;
   }

   for (const key of Object.keys(map)) {
      if (map[Number(key)] === 1) {
         return Number(key);
      }
   }
}
