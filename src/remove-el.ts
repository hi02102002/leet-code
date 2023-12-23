function removeElement(nums: number[], val: number): number {
   if (nums.length === 1 && nums[0] !== val) {
      return 1;
   }

   if (nums.length === 0) {
      return 0;
   }

   if (nums.length === 1 && nums[0] === val) {
      nums = [];
      return 0;
   }

   if (nums.every((n) => n === val)) {
      nums = [];
      return 0;
   }

   let j = nums.length - 1;
   let i = 0;
   let count = 0;

   const swap = (nums: number[], i: number, j: number) => {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
   };

   while (i < j) {
      console.log(i, j);
      if (nums[j] === val) {
         j--;
      } else if (nums[i] === val && nums[j] !== val) {
         swap(nums, i, j);
         i++;
         j--;
      } else if (nums[i] !== val && nums[j] !== val) {
         i++;
      }
      count++;
   }

   console.log(nums);
   console.log(count);

   return count;
}

removeElement([3, 3], 5);
