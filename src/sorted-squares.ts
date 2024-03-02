function sortedSquares(nums: number[]): number[] {
   let left = 0;
   let right = nums.length - 1;
   let result: number[] = [];

   while (left <= right) {
      if (square(nums[left]) > square(nums[right])) {
         result.unshift(square(nums[left]));
         left++;
      } else {
         result.unshift(square(nums[right]));
         right--;
      }
   }

   return result;
}

function square(num: number) {
   return num * num;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
