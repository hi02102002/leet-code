function containsDuplicate(nums: number[]): boolean {
   const obj: Record<number, number> = {};

   for (const num of nums) {
      obj[num] = obj[num] ? obj[num] + 1 : 1;

      if (obj[num] >= 2) {
         return true;
      }
   }

   return false;
}
