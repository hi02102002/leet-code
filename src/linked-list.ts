class LinkNode<T = unknown> {
   value: T;
   next: LinkNode<T> | null;

   constructor(value: T) {
      this.value = value;
      this.next = null;
   }
}

class LinkedList<T = unknown> {
   head: LinkNode<T> | null;
   tail: LinkNode<T> | null;
   length: number;

   constructor(...values: T[]) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      if (values) {
         values.forEach((value) => {
            this.push(value);
         });
         this.length = values.length;
      }
   }

   /**
    * @description Push item to linked-list and return this instance
    * @param value {T}
    * @returns {LinkedList<T>}
    */
   push(value: T): LinkedList<T> {
      const node = new LinkNode(value);

      if (!this.head) {
         this.head = node;
         this.tail = node;
      }

      if (this.tail) {
         this.tail.next = node;
         this.tail = node;
      }

      this.length++;

      return this;
   }

   /**
    * @description Remove last item to linked-list
    */
   pop(): T | undefined {
      if (!this.head) return undefined;

      let current = this.head;
      let prev = this.head;

      while (current.next) {
         prev = current;
         current = current?.next;
      }

      prev.next = null;
      this.tail = prev;

      this.length--;

      return current.value;
   }

   /**
    * @description Insert first item to linked-list and return this instance
    */
   unshift(value: T): LinkedList<T> {
      const newNode = new LinkNode(value);

      if (!this.head) {
         return this.push(value);
      }

      newNode.next = this.head;
      this.head = newNode;
      this.length++;

      return this;
   }

   /**
    * @description Remove first item from linked-list and return value of node removed
    * @returns {T}
    */
   shift(): T | undefined {
      if (!this.head) return undefined;

      const temp = this.head;

      this.head = this.head.next;

      this.length--;
      return temp.value;
   }

   /**
    * @description Get item at index in linked-list
    * @returns {LinkNode<T> | null}
    */
   get(index: number): LinkNode<T> | null {
      this._checkInputIndex(index);

      if (!this.head) return null;

      let currentIndex = 0;
      let current = this.head;

      while (current) {
         if (currentIndex === index) {
            break;
         }
         current = current.next as LinkNode<T>;
         currentIndex++;
      }

      return current;
   }

   /**
    * @description Insert new value to linked-list at index
    * @param value {T}
    * @param index {number}
    * @returns {LinkedList<T>}
    */
   insert(value: T, index: number): LinkedList<T> {
      this._checkInputIndex(index);

      if (index === 0) {
         this.unshift(value);
         this.length++;
         return this;
      }

      if (index === this.length - 1) {
         this.push(value);
         this.length++;
         return this;
      }

      const newNode = new LinkNode(value);
      const prev = this.get(index - 1);

      if (prev) {
         newNode.next = prev.next;

         prev.next = newNode;

         this.length++;
         return this;
      }

      return this;
   }

   /**
    * @description Remove item from linked-list at index
    * @param index {number}
    * @returns  { LinkedList<T> }
    */
   deleteAt(index: number): LinkedList<T> {
      this._checkInputIndex(index);

      if (index === 0) {
         this.shift();
         this.length--;
         return this;
      }

      if (index === this.length - 1) {
         this.pop();
         this.length--;
         return this;
      }

      const prev = this.get(index - 1);

      prev!.next = prev!.next?.next as LinkNode<T>;
      this.length--;
      return this;
   }

   /**
    * @description Print all item in linked-list
    */
   print(): void {
      console.log(this.toArray());
   }

   find(value: T) {
      let current = this.head;

      let index = 0;

      while (current) {
         if (value === current.value) {
            return current;
         }
         index++;
         current = current.next;
      }

      return undefined;
   }

   findIndex(index: number) {
      try {
         this._checkInputIndex(index);

         const node = this.get(index);

         if (!node) return -1;

         return node;
      } catch (error) {
         return -1;
      }
   }

   sort(asc = true) {
      let current = this.head;

      for (let i = 0; i < this.length; i++) {
         const start = this.head;
      }

      return this;
   }

   private swapper(node1: LinkNode<T>, node2: LinkNode<T>, asc = true) {}

   toArray(): Array<T> {
      const arr: Array<T> = [];
      let current = this.head;

      while (current) {
         arr.push(current.value);
         current = current.next;
      }

      return arr;
   }

   reverse() {
      if (!this.head) return this;

      let node: LinkNode<T> = this.head;
      this.head = this.tail;
      this.tail = node;
      let prev: LinkNode<T> | null = null;
      let next: LinkNode<T> | null;

      for (let i = 0; i < this.length; i++) {
         next = node.next;
         console.log('before', {
            node: node.value,
            'node-next': node.next?.value,
            next: next?.value,
            prev: prev?.value,
            i,
         });
         node.next = prev;
         prev = node;
         node = next as LinkNode<T>;
         console.log('after', {
            node: node?.value,
            'node-next': node?.next?.value,
            next: next?.value,
            prev: prev?.value,
            i,
         });
      }
      return this;
   }

   private _checkInputIndex(index: number): void {
      if (index < 0 || index > this.length - 1) {
         throw new Error('Out of range of LinkedList');
      }
   }
}

const linkedList = new LinkedList(1, 2, 3, 4, 5).reverse();

linkedList.print();
