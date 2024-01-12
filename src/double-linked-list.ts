class DNode<T> {
   value: T;
   prev: DNode<T> | null;
   next: DNode<T> | null;
   constructor(value: T) {
      this.value = value;
      this.next = null;
      this.prev = null;
   }
}

class DoubleLinkedList<T> {
   tail: DNode<T> | null = null;
   head: DNode<T> | null = null;
   length: number = 0;

   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }

   push(value: T): DoubleLinkedList<T> {
      const nNode = new DNode(value);
      if (this.length === 0) {
         this.head = nNode;
         this.tail = nNode;
      } else {
         if (this.tail) {
            this.tail.next = nNode;
            nNode.prev = this.tail;
            this.tail = nNode;
         }
      }

      this.length++;
      return this;
   }

   pop(): DNode<T> | undefined | null {
      if (!this.head) return undefined;

      const popped = this.tail;

      if (!popped) return undefined;

      if (this.length === 1) {
         this.head = null;
         this.tail = null;
      } else {
         this.tail = popped.prev!;
         this.tail.next = null;

         popped.prev = null;
      }
      this.length--;
      return popped;
   }

   unshift(value: T): DoubleLinkedList<T> {
      const nNode = new DNode(value);
      if (!this.head) {
         this.head = nNode;
         this.tail = nNode;
      } else {
         this.head.prev = nNode;
         nNode.next = this.head;
         this.head = nNode;
      }
      this.length++;
      return this;
   }

   shift(): DNode<T> | undefined | null {
      if (!this.head) return undefined;

      const shifted = this.head;

      if (this.length === 1) {
         this.head = null;
         this.tail = null;
      } else {
         const next = shifted.next!;
         next.prev = null;
         this.head = next;
         shifted.next = null;
      }
      this.length--;
      return shifted;
   }

   get(index: number): DNode<T> | null {
      this._checkLength(index);

      if (index === 0) {
         return this.head;
      }

      if (index === this.length - 1) return this.tail;

      let cIndex = 0;
      let cNode = this.head;

      while (cIndex !== index) {
         cNode = cNode?.next!;
         cIndex++;
      }

      return cNode;
   }

   insert(index: number, value: T): boolean {
      try {
         this._checkLength(index);

         if (index === 0) {
            this.unshift(value);
         } else if (index === this.length - 1) {
            this.push(value);
         } else {
            const nNode = new DNode(value);
            const prevNode = this.get(index - 1)!;
            const nextNode = prevNode?.next!;
            prevNode.next = nNode;
            nNode.prev = prevNode;
            nNode.next = nextNode;
            nextNode.prev = nNode;
         }
         this.length++;
         return true;
      } catch (error) {
         return false;
      }
   }

   remove(index: number): boolean {
      try {
         this._checkLength(index);

         if (index === 0) {
            this.shift();
         } else if (index === this.length - 1) {
            this.pop();
         } else {
            const rNode = this.get(index)!;
            const nNode = rNode.next!;
            const pNode = rNode.prev!;
            pNode.next = nNode;
            nNode.prev = pNode;
            rNode.next = null;
            rNode.prev = null;
         }
         this.length--;
         return true;
      } catch (error) {
         return false;
      }
   }

   traversal() {
      let current = this.head;

      while (current) {
         console.log(current);
         current = current.next;
      }
   }

   private _checkLength(index: number) {
      if (index < 0 || index > this.length - 1) {
         throw new Error('Out of length!!!!');
      }
   }
}

const dList = new DoubleLinkedList();
dList.push(0);
dList.push(1);
dList.push(2);
dList.push(3);
dList.push(4);
dList.traversal();
