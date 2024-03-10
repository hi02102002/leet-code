function findDifference(nums1: number[], nums2: number[]): number[][] {
   const setOfNums1 = new Set(nums1);
   const setOfNums2 = new Set(nums2);

   const distinctNums1: number[] = [];
   const distinctNums2: number[] = [];

   setOfNums1.forEach((num) => {
      if (!setOfNums2.has(num)) {
         distinctNums1.push(num);
      }
   });

   setOfNums2.forEach((num) => {
      if (!setOfNums1.has(num)) {
         distinctNums2.push(num);
      }
   });

   return [distinctNums1, distinctNums2];
}

console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
