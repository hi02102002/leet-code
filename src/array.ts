class MArray<T> {
   private arr: T[];

   constructor(arr?: T[]) {
      this.arr = arr || [];
   }

   size() {
      return this.arr.length;
   }

   isEmpty() {
      return this.arr.length === 0;
   }

   at(index: number) {
      if (index > this.arr.length - 1 || index < 0) {
         throw new Error('Outside array');
      }

      return this.arr[index];
   }

   push(value: T) {
      this.arr[this.arr.length] = value;
   }
   // []
   // [1,2,4,5,6,7]
   insert(index: number, value: T) {
      if (this.arr.length === 0) {
         this.push(value);
      }

      if (index > this.arr.length - 1 || index < 0) {
         throw new Error('Outside array');
      }

      for (let i = index; i < this.arr.length; i++) {
         console.log(i, i + 1);
         this.arr[i + 1] = this.arr[i];
      }

      this.arr[index] = value;
   }

   getValue() {
      return this.arr;
   }
}

const arr = new MArray<number>([1, 2, 3, 4, 5]);

arr.insert(1, 2);

console.log(arr.getValue());
