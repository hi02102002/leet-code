function isPathCrossing(path: string): boolean {
   let x = 0;
   let y = 0;

   const set = new Set();

   set.add(`${x}-${y}`);

   const obj: Record<string, () => number> = {
      N: () => y++,
      S: () => y--,
      E: () => x++,
      W: () => x--,
   };

   for (const direction of path) {
      obj[direction]();

      if (set.has(`${x}-${y}`)) return true;

      set.add(`${x}-${y}`);
   }

   return false;
}

console.log(isPathCrossing('NESWW'));
