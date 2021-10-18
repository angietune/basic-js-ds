import { NotImplementedError } from "../extensions/index.js";

import { ListNode } from "../extensions/list-node.js";

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
export default class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  getUnderlyingList() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  enqueue(value) {
    const temp = new ListNode(value);
    if (this.last == null) {
      this.first = temp;
      this.last = temp;
      this.size++;
      return;
    }
    this.last.next = temp;
    this.last = temp;
    this.size++;
  }

  dequeue() {
    if (this.first == null) return;
    this.first = this.first.next;
    this.size--;
    if (this.first == null) this.last = null;
  }
}
