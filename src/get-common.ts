function getCommon(nums1: number[], nums2: number[]): number {
   const mapOfNumS1 = new Map();

   for (const num of nums1) {
      mapOfNumS1.set(num, num);
   }

   let result = Number.MAX_VALUE;

   for (const num of nums2) {
      if (mapOfNumS1.has(num) && mapOfNumS1.get(num) < result) {
         result = num;
      }
   }

   return result === Number.MAX_VALUE ? -1 : result;
}

console.log(getCommon([1, 3, 6], [2, 3, 4, 5]));
