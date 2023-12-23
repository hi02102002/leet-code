class TNode<T = unknown> {
   value: T;
   next: TNode<T> | null;

   constructor(value: T) {
      this.value = value;
      this.next = null;
   }
}

class LinkedList<T = unknown> {
   head: TNode<T> | null;
   tail: TNode<T> | null;
   length: number;

   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }

   push(value: T): LinkedList<T> {
      const node = new TNode(value);

      if (this.tail) {
         this.tail.next = node;
         this.tail = node;
      }

      if (!this.head && !this.head) {
         this.head = node;
         this.tail = node;
      }

      this.length++;

      return this;
   }

   pop(): T | undefined {
      if (!this.head) return undefined;

      let current = this.head.next;
      let newTail = this.head;

      while (current?.next !== null) {
         newTail = current as TNode<T>;
         current = current?.next as TNode<T>;
      }

      const tmp = newTail.next;

      newTail.next = null;
      this.tail = newTail;
      this.length--;

      return tmp?.value;
   }

   unshift(value: T): LinkedList<T> {
      const node = new TNode(value);

      if (!this.head) {
         return this.push(value);
      }

      node.next = this.head;
      this.head = node;
      this.length++;

      return this;
   }

   shift(): T | undefined {
      if (!this.head) return undefined;

      const temp = this.head;

      this.head = this.head.next;

      this.length--;
      return temp.value;
   }

   insert(value: T, pos: number): void {
      if (pos <= 0) {
         this.unshift(value);
         return;
      }

      if (pos > this.length - 1) {
         this.push(value);
         return;
      }
      let current = this.head?.next;
      let prev = this.head;
      let i = 0;

      while (current?.next !== null && i < pos - 1) {
         i++;
         prev = current as TNode<T>;
         current = current?.next as TNode<T>;
      }

      const node = new TNode(value);

      if (prev) {
         node.next = prev.next;
         prev.next = node;
      }
   }

   deleteAt(pos: number): void {
      if (pos <= 0) {
         this.shift();
         return;
      }

      if (pos >= this.length - 1) {
         this.pop();
         return;
      }

      let current = this.head?.next;
      let prev = this.head;
      let i = 0;

      while (current?.next !== null && i < pos - 1) {
         i++;
         prev = current as TNode<T>;
         current = current?.next as TNode<T>;
      }

      if (prev) {
         prev.next = prev.next?.next as TNode<T>;
      }
   }

   traversal(): void {
      let current = this.head;

      while (current !== null) {
         console.log(current?.value);
         current = current.next;
      }
   }

   find(value: T) {
      let current = this.head;

      let index = 0;

      while (current !== null) {
         if (current?.value === value) {
            return index;
         }
         index++;
         current = current.next;
      }

      return -1;
   }

   sort(asc = true) {
      let current = this.head;

      for (let i = 0; i < this.length; i++) {
         const start = this.head;
      }

      return this;
   }

   private swapper(node1: TNode<T>, node2: TNode<T>, asc = true) {}

   toArray(): Array<T> {
      const arr: Array<T> = [];
      let current = this.head;

      while (current !== null) {
         arr.push(current.value);
         current = current.next;
      }

      return arr;
   }

   reverse() {}
}

const linkedList = new LinkedList<number>();

linkedList.unshift(0);
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.insert(6, 3);
linkedList.deleteAt(3);
linkedList.sort(true);
