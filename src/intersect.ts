function intersect(nums1: number[], nums2: number[]): number[] {
   const mapOfNumS1 = new Map();

   for (const num of nums1) {
      mapOfNumS1.set(num, mapOfNumS1.has(num) ? mapOfNumS1.get(num) + 1 : 1);
   }

   const result: number[] = [];

   for (const num of nums2) {
      if (mapOfNumS1.get(num)) {
         mapOfNumS1.set(num, mapOfNumS1.get(num) - 1);
         result.push(num);
      }
   }

   return result;
}

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
