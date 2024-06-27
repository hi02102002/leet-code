/**
 * 2441. Largest Positive Integer That Exists With Its Negative
 *
 */

function findMaxK(nums: number[]): number {
   const MAP_NEGATIVES: Record<number, number> = {};
   let max = Number.MIN_SAFE_INTEGER;

   for (const num of nums) {
      if (num < 0) {
         MAP_NEGATIVES[num] = num;
      }
   }

   for (const num of nums) {
      if (num > max && MAP_NEGATIVES[-num]) {
         max = num;
      }
   }

   return max === Number.MIN_SAFE_INTEGER ? -1 : max;
}

console.log(findMaxK([-7, 8, 6, 7, -2, -3]));
