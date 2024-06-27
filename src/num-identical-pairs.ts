function numIdenticalPairs(nums: number[]): number {
   let count = 0;
   for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
         if (nums[i] === nums[j] && i < j) {
            count++;
         }
      }
   }

   return count;
}

numIdenticalPairs([1, 2, 3, 1, 1, 3]);

function numIdenticalPairs2(nums: number[]): number {
   const map: Record<any, number> = {};
   let result = 0;

   nums.forEach((num) => {
      if (map[num]) {
         result += map[num];
      } else {
         map[num] = 1;
      }
   });

   return result;
}

console.log(numIdenticalPairs2([1, 2, 3, 1, 1, 3]));
