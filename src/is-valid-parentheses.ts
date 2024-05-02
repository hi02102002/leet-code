const MAP: Record<string, string> = {
   ')': '(',
   ']': '[',
   '}': '{',
};

function isValid(s: string): boolean {
   const stack: string[] = [];

   for (const c of s) {
      if (Object.values(MAP).includes(c)) {
         stack.push(c);
      } else {
         const peek = stack[stack.length - 1];

         if (peek === MAP[c]) {
            stack.pop();
         } else {
            return false;
         }
      }
   }

   return stack.length === 0;
}

console.log(isValid(')()'));
