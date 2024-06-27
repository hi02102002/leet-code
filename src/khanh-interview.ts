const solution = (arr: number[][]): number[][] => {
   arr = arr.sort((a, b) => {
      const [numA] = a;
      const [numB] = b;

      return numA - numB;
   });

   const result: number[][] = [];

   let i = 0;

   while (i < arr.length) {
      let [start, end] = arr[i];

      while (i < arr.length && end >= arr[i + 1]?.[0]) {
         end = Math.max(end, arr[i + 1][1]);
         i++;
      }

      result.push([start, end]);

      i++;
   }

   return result;
};

console.log(
   JSON.stringify(
      solution([
         [1, 3],
         [2, 6],
         [10, 15],
         [18, 21],
      ])
   )
);
