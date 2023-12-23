function thirdMax(nums: number[]): number {
   let max1 = Number.NEGATIVE_INFINITY;
   let max2 = Number.NEGATIVE_INFINITY;
   let max3 = Number.NEGATIVE_INFINITY;

   nums = [...new Set(nums)];

   for (let num of nums) {
      if (num > max1) {
         max3 = max2;
         max2 = max1;
         max1 = num;
      } else if (num > max2) {
         max3 = max2;
         max2 = num;
      } else if (num > max3) {
         max3 = num;
      }
   }

   if (nums.length < 3) {
      return max1;
   }

   return max3;
}
