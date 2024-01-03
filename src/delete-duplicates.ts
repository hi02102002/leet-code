class ListNode {
   val: number;
   next: ListNode | null;
   constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
   }
}

// function deleteDuplicates(head: ListNode | null): ListNode | null {
//    let current = head;

//    while (current) {
//       let next = current?.next;

//       while (current.val === next?.val) {
//          current.next = next.next;
//          next = next.next;
//       }
//       current = current.next;
//    }

//    return head;
// }

function deleteDuplicates(head: ListNode | null): ListNode | null {
   let current = head;

   while (current?.next) {
      if (current.val === current.next.val) {
         current.next = current.next.next;
      } else {
         current = current.next;
      }
   }

   return head;
}

const list = new ListNode(1);
const list2 = new ListNode(1);
const list3 = new ListNode(2);
list.next = list2;
list2.next = list3;

deleteDuplicates(list);

console.log(list.next);
