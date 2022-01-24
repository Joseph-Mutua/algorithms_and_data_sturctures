// Implement the class Queue using stacks. The queue methods
// you need to implement are enqueue, dequeue, peek and empty

// enqueue - Append a value at start of queue
// dequeue - Remove the value at the start of the queue
// peek - Return the value at the start of the queue
// Empty - Return a boolean of whether the queue is empty or not

class QueueWithStacks {
  constructor() {
    this.in = [];
    this.out = [];
  }

  enqueue(val) {
    this.in.push(val);
  }

  dequeue() {
    if (this.out.length === 0) {
      while (this.in.length) {
        this.out.push(this.in.pop());
      }
    }
    return this.out.pop();
  }

  peek() {
    if (this.out.length === 0) {
      while (this.in.length) {
        this.out.push(this.in.pop());
      }
    }
    return this.out[this.out.length - 1];
  }

  empty() {
      return this.in.length === 0 && this.out.length === 0
  }
}
