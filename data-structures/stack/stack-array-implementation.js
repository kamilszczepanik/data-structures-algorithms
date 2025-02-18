class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    return this.stack.push(value);
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    return this.stack.pop();
  }

  get isEmpty() {
    return this.stack.length === 0;
  }
}

const myStack = new Stack();

myStack.push("Discord");
myStack.push("Udemy");
myStack.push("Google");

console.log(myStack);

console.log(myStack.peek());

myStack.pop();

console.log(myStack);
console.log(myStack.isEmpty);

myStack.pop();
myStack.pop();

console.log(myStack.isEmpty);
