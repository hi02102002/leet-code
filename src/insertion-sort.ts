const insertionSort = (arr: number[]) => {
   for (let i = 1; i < arr.length; i++) {
      let extract = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > extract) {
         arr[j + 1] = arr[j];
         j--;
      }

      arr[j + 1] = extract;
   }

   return arr;
};

console.log(insertionSort([11, 34, 31, 11, 9, 35]));
