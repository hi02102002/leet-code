function maxSubarrayOfSizeK(arr: number[], k: number) {
   //sliding window
   let maxSum = 0;
   let windowSum = 0;
   let windowStart = 0;
   let windowEnd = 0;

   for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      windowSum += arr[windowEnd];

      if (windowEnd >= k - 1) {
         maxSum = Math.max(maxSum, windowSum);

         windowSum -= arr[windowStart];

         windowStart++;
      }
   }
   return {
      maxSum,
      start: windowEnd - windowStart,
      end: windowEnd - windowStart + k - 1,
   };
}

function maxSubArray(nums: number[]): number {
   if (nums.length === 1) return nums[0];

   let maxSum = nums[0];

   for (let i = 1; i <= nums.length; i++) {
      const { end, maxSum: _maxSum, start } = maxSubarrayOfSizeK(nums, i);

      console.log(i);

      console.log(_maxSum);

      if (_maxSum >= maxSum) {
         maxSum = _maxSum;
      }
   }

   return maxSum;
}

console.log(maxSubArray([-2, -1]));
