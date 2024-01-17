function uniqueOccurrences(arr: number[]): boolean {
   const map = new Map();

   for (const num of arr) {
      if (map.has(num)) {
         map.set(num, map.get(num) + 1);
      } else {
         map.set(num, 1);
      }
   }

   const set = new Set(map.values());

   return set.size === map.size;
}

console.log(uniqueOccurrences([1, 2]));
