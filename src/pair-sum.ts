const pairSum = (arr: number[], target: number) => {
   let i = 0;
   let j = i + 1;
   const result: Array<Array<number>> = [];
   const set = new Set<string>();

   while (i < arr.length) {
      if (arr[i] + arr[j] === target) {
         if (!set.has(`${j}-${i}`) && !set.has(`${i}-${j}`)) {
            if (arr[i] > arr[j]) {
               result.push([arr[j], arr[i]]);
            } else {
               result.push([arr[i], arr[j]]);
            }
         }

         set.add(`${j}-${i}`);
         set.add(`${i}-${j}`);
      }
      j++;

      if (j === arr.length - 1) {
         i++;
         j = 0;
      }
   }

   console.log(JSON.stringify(result));
};

pairSum([2, -3, 3, 3, -2], 0);
