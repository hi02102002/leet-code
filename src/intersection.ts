function intersection(nums1: number[], nums2: number[]): number[] {
   const setNums1 = new Set(nums1);
   const result: number[] = [];

   for (const num of nums2) {
      if (setNums1.has(num)) {
         result.push(num);
         setNums1.delete(num);
      }
   }

   return result;
}

console.log(intersection([1, 2, 2, 1], [2, 2]));
