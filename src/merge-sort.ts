const merge = (arr1: number[], arr2: number[]) => {
   const result: number[] = [];
   let i = 0; // for arr1
   let j = 0; // for arr2

   while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
         result.push(arr1[i]);
         i++;
      } else {
         result.push(arr2[j]);
         j++;
      }
   }

   while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
   }

   while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
   }

   return result;
};

const mergeSort = (arr: number[]): number[] => {
   if (arr.length <= 1) return arr;
   const mid = Math.floor(arr.length / 2);

   const left = mergeSort(arr.slice(0, mid));
   const right = mergeSort(arr.slice(mid));

   return merge(left, right);
};

console.log(mergeSort([2, 3, 1, 2, 4, 7, 0, 10]));
