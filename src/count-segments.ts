function countSegments(s: string): number {
   s = customTrim(s);
   if (s.length === 0) {
      return 0;
   }

   let count = 0;
   for (let i = 0; i < s.length; i++) {
      if (s[i - 1] && s[i - 1] === ' ' && s[i] !== ' ') {
         count++;
      }
   }

   return count + 1;
}

function customTrim(str: string): string {
   let start = 0;
   let end = str.length - 1;

   while (start < str.length && isWhitespace(str[start])) {
      start++;
   }

   while (end >= 0 && isWhitespace(str[end])) {
      end--;
   }

   let trimmedString = '';
   for (let i = start; i <= end; i++) {
      trimmedString += str[i];
   }

   return trimmedString;
}

// Helper function to check if a character is a whitespace character
function isWhitespace(char: string): boolean {
   return char === ' ' || char === '\t' || char === '\n' || char === '\r';
}
