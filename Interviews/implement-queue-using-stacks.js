class MyQueue {
  constructor() {
    this.inputStack = [];
    this.outputStack = [];
  }

  push(value) {
    return this.inputStack.push(value);
  }

  peek() {
    return this.inputStack[0];
  }

  pop() {
    for (let i = this.inputStack.length - 1; i >= 0; i--) {
      this.outputStack.push(this.inputStack.pop());
    }

    return this.outputStack.pop();
  }

  get isEmpty() {
    return this.inputStack.length === 0 && this.outputStack.length === 0;
  }
}

const queue = new MyQueue();

queue.push(1);
queue.push(2);
console.log(queue.peek()); // returns 1
console.log(queue.pop()); // returns 1
console.log(queue.isEmpty); // return false
queue.pop();
console.log(queue.isEmpty); // return true
