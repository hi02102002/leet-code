function containsNearbyDuplicate(nums: number[], k: number): boolean {
   const map: Record<number, number> = {};

   for (let i = 0; i < nums.length; i++) {
      if (Math.abs(map[nums[i]] - i) <= k) {
         return true;
      } else {
         map[nums[i]] = i;
      }
   }

   return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
